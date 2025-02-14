FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

RUN chmod -R 755 /usr/share/nginx/html

COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 5050

CMD ["nginx", "-g", "daemon off;"]