require('dotenv').config();
const express = require('express')
const app = express()
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web')
const mysql = require('mysql2');
//use env
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

configViewEngine(app);

app.use('/', webRoutes)

//test connection
const connection = mysql.createConnection({
  host: 'localhost',
  port: '3307', //default: 3306
  user: 'root',
  password: '123456',
  database: 'vanh'
});

connection.query(
  'select * from Users',
  function(err, results, fields) {
    console.log(">>> results=",results);
    console.log(">>> fields=",fields);
  } 
)

app.listen(port, hostname, ()=>[
  console.log(`Example app listening on port ${port}`)
])