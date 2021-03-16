// sample express app from
// https://medium.com/@sunilmore/complete-setup-for-deploying-nodejs-app-with-mongodb-database-on-amazon-ec2-e6eeb3b47bc0
//
const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Hello World</title></head><body>Hello World 1.1!</body></html>`);
});

app.listen(3000,function(){
  console.log('Express app start on port 3000')
});
