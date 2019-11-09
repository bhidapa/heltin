FROM node:12 as build-stage

WORKDIR /heltin-app

# install deps first
COPY ./heltin-app/package*.json ./
RUN npm ci

# then build app
COPY ./heltin-app/ ./
RUN npm run build

FROM nginx:1.17

COPY --from=build-stage /heltin-app/build/ /usr/share/nginx/html
COPY ./heltin-app/nginx.template /etc/nginx/conf.d/
