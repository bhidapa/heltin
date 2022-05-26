<br>
  <h3 align="center">
    heltin
  </h3>
  <p align="center">
    Robust client registry for individuals receiving healthcare services
  </p>
  <p align="center">
    <a href="https://www.docker.com/">Docker</a>
    +
    <a href="https://www.postgresql.org/">Postgres</a>
    +
    <a href="https://graphql.org/">GraphQL</a>
    +
    <a href="https://golang.org/">Go</a>
    +
    <a href="https://www.typescriptlang.org/">TypeScript</a>
    +
    <a href="https://www.graphile.org/postgraphile/">PostGraphile</a>
    +
    <a href="https://vitejs.dev/">Vite</a>
    +
    <a href="https://reactjs.org/">React</a>
    +
    <a href="https://www.gethalfmoon.com/">Halfmoon</a>
    +
    <a href="https://relay.dev">Relay</a>
  </p>
<br>

# Quick start

1.  Make sure that you have [Docker](https://www.docker.com/products/docker-engine) installed
2.  Clone this repo using `git clone https://github.com/bhidapa/heltin.git` and cd into it
3.  Run `docker compose up` to start the stack<br>
    - Postgres database will be exposed at: **[postgres://localhost:54321/heltin](postgres://localhost:54321/heltin)**
    - GraphQL endpoint will be located at: **[http://localhost:50000/graphql](http://localhost:50000/graphql)**<br>
      _Explore the schema using [GraphiQL](https://github.com/graphql/graphiql) at: [http://localhost:50000/graphiql](http://localhost:50000/graphiql)_
    - The application will be located at: **[http://localhost:8080](http://localhost:8080)**<br>
      _Use `john@doe.com:password` to login_
