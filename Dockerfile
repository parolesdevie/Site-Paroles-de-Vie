### STAGE 1: Build ###
FROM node:latest as build

RUN mkdir /usr/src/app
WORKDIR /usr/src/app


ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json

RUN npm i

COPY . /usr/src/app
RUN npm run generate

### STAGE 2: NGINX ###
FROM nginx:stable-alpine
COPY --from=build /usr/src/app/.output/public /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]