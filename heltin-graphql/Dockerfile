FROM node:12-alpine

COPY ./heltin-graphql/tsconfig.json /heltin-graphql/
COPY ./heltin-graphql/package-lock.json /heltin-graphql/
COPY ./heltin-graphql/package.json /heltin-graphql/
COPY ./heltin-graphql/src /heltin-graphql/

WORKDIR /heltin-graphql/

RUN npm ci

RUN npm run build

ENV GRAPHILE_TURBO=1

ENTRYPOINT [ "npm", "start" ]
