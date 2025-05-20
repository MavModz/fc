FROM node:18-alpine

WORKDIR /app

RUN apk add --no-cache \
    chromium \
    harfbuzz \
    ca-certificates \
    ttf-freefont \
    nss \
    freetype \
    libstdc++ \
    chromium-chromedriver 

ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

COPY .env .env

# RUN chmod +x /app/deploy.sh

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]