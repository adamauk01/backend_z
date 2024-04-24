require('dotenv').config();
const express = require('express')
const app = express()
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web')
const connection = require('./config/database');
//use env
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
//config req.body
app.use(express.json()) //for json
app.use(express.urlencoded({extended: true})) //for form data
configViewEngine(app);

app.use('/', webRoutes);



// connection.query(
//   'select * from Users',
//   function(err, results, fields) {
//     console.log(">>> results=",results);
//     console.log(">>> fields=",fields);
//   } 
// )

app.listen(port, hostname, ()=>[
  console.log(`Example app listening on port ${port}`)
])