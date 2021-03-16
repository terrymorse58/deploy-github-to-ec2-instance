// sample express app from
// https://medium.com/@sunilmore/complete-setup-for-deploying-nodejs-app-with-mongodb-database-on-amazon-ec2-e6eeb3b47bc0
//
const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;

app.get("/", function(req, res) {
  res.send(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Hello World</title></head><body>Hello World!</body></html>`);
});

app.get("/users", function() {
  MongoClient.connect("mongodb://localhost:27017/test", function(err, db) {
    if (err) next
    db
      .collection("users")
      .find()
      .toArray(function(err, result) {
        if (err) throw err;
        res.json(result)
      });
  });
});
app.listen(3000,function(){
  console.log('Express app start on port 3000')
});
