# Front End Code Challenge - Native

## Getting Started

```bash
npm install
npm start
```

## API

This is a simple JSON database, stored in `db.json` and hosted on `localhost:3000`

Documentation: <https://github.com/typicode/json-server>

### People

#### Schema

```json
{
    "id": string,
    "isActive": boolean,
    "name": {
        "first": string,
        "last": string
    },
    "company": string
}
```

##### Routes

GET    /people
GET    /people/{id}
POST   /people
PUT    /people/{id}
PATCH  /people/{id}
DELETE /people/{id}

## App

This is a simple HTTP server, hosted on `localhost:8080`

Documentation: <https://github.com/http-party/http-server#readme>
