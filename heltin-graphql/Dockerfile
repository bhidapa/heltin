FROM node:12-alpine

COPY ./tsconfig.json /heltin-graphql/
COPY ./package-lock.json /heltin-graphql/
COPY ./package.json /heltin-graphql/
COPY ./src /heltin-graphql/

WORKDIR /heltin-graphql/

RUN npm ci

RUN npm run build

ENV GRAPHILE_TURBO=1

ENTRYPOINT [ "npm", "start" ]
