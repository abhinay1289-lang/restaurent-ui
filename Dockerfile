FROM node:19.6.0-alpine as builder
WORKDIR /usr/app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
EXPOSE 80
RUN npm run build

FROM nginx:1.19.0
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /usr/app/build /usr/share/nginx/html