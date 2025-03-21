import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private readonly API_URL = 'http://localhost:3000/auth';
  private accessTokenSubject: BehaviorSubject<string | null>;
  private refreshTokenSubject: BehaviorSubject<string | null>;

  constructor(private readonly http: HttpClient, private router: Router) {
    this.accessTokenSubject = new BehaviorSubject<string | null>(
      localStorage.getItem('accessToken')
    );
    this.refreshTokenSubject = new BehaviorSubject<string | null>(
      localStorage.getItem('refreshToken')
    );
  }
  get accessToken(): string | null {
    return this.accessTokenSubject.value;
  }
  get refreshToken(): string | null {
    return this.refreshTokenSubject.value;
  }

  login(
    username: string,
    password: string
  ): Observable<{ accessToken: string; refreshToken: string }> {
    return this.http
      .post<{ accessToken: string; refreshToken: string }>(
        `${this.API_URL}/login`,
        {
          username,
          password,
        }
      )
      .pipe(
        tap((response) => {
          this.loggedIn.next(true);
          localStorage.setItem('accessToken', response.accessToken);
          localStorage.setItem('refreshToken', response.refreshToken);
          this.accessTokenSubject.next(response.accessToken);
          this.refreshTokenSubject.next(response.refreshToken);
        })
      );
  }

  logout(): void {
    this.loggedIn.next(false);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    this.accessTokenSubject.next(null);
    this.refreshTokenSubject.next(null);
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  refreshAccessToken(): Observable<{ accessToken: string }> {
    return this.http
      .post<{ accessToken: string }>(`${this.API_URL}/refresh`, {
        refreshToken: this.refreshToken,
      })
      .pipe(
        tap((response) => {
          localStorage.setItem('accessToken', response.accessToken);
          this.accessTokenSubject.next(response.accessToken);
        })
      );
  }
}
