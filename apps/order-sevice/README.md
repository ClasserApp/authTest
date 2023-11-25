## Step 2.1: Scripts - pre-requisites

After configuration of the server the next step would be to run the application. Before running the server side of the component, make sure that the different pre-requisites are met - i.e., node.js [^16.x], npm, docker. After the setup of the pre-requisites the server component can be started.

```sh
# installation of the dependencies
$ npm install

# generate the prisma client
$ npm run prisma:generate
```

## Step 2.2: Scripts - local development

```sh
# start the database where the server component will connect to
$ npm run docker:dev

# initialize the database
$ npm run db:init

# start the server component
$ npm run start
```

By default, your app comes with one user with the username "admin" and password "admin".

## Step 2.2: Scripts - container based development

```shell
# start the server component as a docker container
$ npm run compose:up
```
