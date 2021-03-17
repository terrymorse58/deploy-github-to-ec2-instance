// sample express app from
// https://medium.com/@sunilmore/complete-setup-for-deploying-nodejs-app-with-mongodb-database-on-amazon-ec2-e6eeb3b47bc0
//
const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send(`Hello World 1.4!`);
  console.log(`App says "Hello World"`);
});

app.listen(3000,function(){
  console.log('Express app start on port 3000')
});
