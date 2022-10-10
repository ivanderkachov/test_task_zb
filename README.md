## Quick start

1. Clone this repo using:

  ```shell
  $ git clone git@github.com:ivanderkachov/test_task_zb.git
  ```

2. To install dependencies on client side run:

  ```shell
  $ npm install
  ```

3. To install dependencies on server side - cd into 'server' folder and run:

  ```shell
  $ npm install
  ```

4. Then setup the connection with PostgreSQL database - run:

  ```shell
  $ docker compose up
  ```


5. Then when connection with database will be created run next command to start the application:

  ```shell
  $ npm run start
  ```

6. Open browser on localhost:8091 (client and server will run on one port)


## Features

* React, Redux
* Styled components
* Node, Express
* PostgreSQL DB, Sequelize, Docker
* Validations on Client (Formik, Yup) and Server (JOI)
