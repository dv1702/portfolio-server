# Portfolio
---
## Requirements

For development, you will only need Node.js and a node global package, npm, installed in your environment.

## Install

    $ git clone https://github.com/dv1702/portfolio-server
    $ cd portfolio-server
    $ npm install

## Running the project

A dummy database file is provided in the 'dummy-db' directory. Use it to create a database for testing purposes.
Change the dummy password in /database/database.js file with your SQL password for establishing a connection with databse.

Set up the database server on port:3306 then use the following command to run the project; 

    $ npm start
the server will listen on port:8000.

## Simple build for production

    $ npm build
