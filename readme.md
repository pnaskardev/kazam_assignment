
# Fullstack TODO Application

This project is a fullstack web application built as an assignment for Kazam, leveraging modern technologies for both the frontend and backend. The application utilizes Vite and **React** for the frontend with Tailwind CSS for styling, and **Node.js** for the backend, all written in **TypeScript**.


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file and **save it inside of the api folder**

`NODE_ENV`

`PORT`

`DEFAULT_KEY`

`DB_CONNECTION_STRING`

`DB_NAME`

`DB_COLLECTION`

`REDIS_CONNECTION_STRING`

`REDIS_PORT`

`REDIS_USERNAME`

`REDIS_PASSWORD`


## Run with Docker

Clone the project

```bash
  git clone https://github.com/pnaskardev/kazam_assignment
```

Go to the project directory
```bash
  cd kazam-assignment
```

Run with Docker
```bash
  docker compose up --build -d
```

Access the webapp at
```bash
 http://localhost:80
```
## Run Locally

Clone the project

```bash
  git clone https://github.com/pnaskardev/kazam_assignment
```

Go to the project directory

```bash
  cd kazam-assignment
```

In a seperate terminal go to the api directory
and start the backend 

```bash
  cd api
  npm install
  npm run start
```

In a seperate terminal go to the web directory
and start the frontend

```bash
  cd web
  npm install
  npm run dev
```

Access the webapp on 

```bash
http://localhost:5173
```


## Authors

- [@pnaskardev](https://github.com/pnaskardev)

