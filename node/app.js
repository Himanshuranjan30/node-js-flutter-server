const express=require('express');
const mongo= require('mongoose');
const e = require('express');
const bodyParser = require('body-parser');
const { Console } = require('console');
const { model } = require('./user_model');

var schema = mongo.Schema({
    name: String,
    age: Number
  });
  var Model = mongo.model("model", schema, "myCollection");
  var doc1 = new Model({ name: "HImu", age: 21 });
 
var str='';

const app=express();
app.use(bodyParser());

const con=mongo.connect('mongodb+srv://himu:himu@cluster0.szkh7.mongodb.net/test',{useNewUrlParser:true,useUnifiedTopology:true});


mongo.connection.once('open',()=>console.log('connected'))
.on('error',(e)=>{
console.log(error);
});


const getres='you got the request';
app.route('/get').get(async(req,res,next)=>{
Model.find({}, function(err, result) {
  if (err) {
    res.send(err);
  } else {
    console.log(result[0].name);
  }
  
});


next();
}
);

app.route('/new').get(async(req,res,next)=>{
    doc1.save(function(err, doc) {

        if (err) return console.error(err);
        console.log("Document inserted succussfully!");
      });
      next();
});

app.listen(10000);
mongo.connect('mongodb+srv://himu:himu@cluster0.szkh7.mongodb.net/test',{useNewUrlParser:true,useUnifiedTopology:true});

mongo.connection.once('open',()=>console.log('connected'))
.on('error',(e)=>{
console.log(error);
});

   
 