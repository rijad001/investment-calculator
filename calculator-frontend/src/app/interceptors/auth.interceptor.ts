import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { catchError, Observable, switchMap, throwError } from 'rxjs';

@Injectable()
export class authInterceptor implements HttpInterceptor {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const accessToken = this.authService.accessToken;
    if (accessToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    }
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 && accessToken) {
          return this.authService.refreshAccessToken().pipe(
            switchMap(() => {
              const newRequest = request.clone({
                setHeaders: {
                  Authorization: `Bearer ${this.authService.accessToken}`,
                },
              });
              return next.handle(newRequest);
            }),
            catchError((refreshError) => {
              this.authService.logout();
              this.router.navigate(['/login']);
              return throwError(refreshError);
            })
          );
        }
        return throwError(error);
      })
    );
  }
}
