FROM node:14-alpine as build-stage

WORKDIR /web

COPY ./web/LICENSE.md .

# yarn setup
COPY ./web/.yarn/releases ./.yarn/releases
COPY ./web/.yarn/plugins ./.yarn/plugins
COPY ./web/.yarnrc.yml .

# install deps
COPY ./web/yarn.lock .
COPY ./web/package.json .
RUN yarn install --immutable

# then build app
COPY ./web .
RUN yarn build

FROM nginx:1.17

COPY --from=build-stage /web/build/ /usr/share/nginx/html
COPY ./web/nginx.template /etc/nginx/conf.d/
