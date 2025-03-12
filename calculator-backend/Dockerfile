# Koristi zvaničnu Node.js sliku
FROM node:18

# Postavi radni direktorijum
WORKDIR /usr/src/app

# Kopiraj package.json i package-lock.json
COPY package*.json ./

# Instaliraj zavisnosti
RUN npm install

# Kopiraj sve fajlove
COPY . .

# Izgradi aplikaciju
RUN npm run build

# Pokreni aplikaciju
CMD ["npm", "run", "start:prod"]