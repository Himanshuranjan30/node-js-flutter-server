const express=require('express');
const mongo= require('mongoose');
const e = require('express');

var schema = mongo.Schema({
    name: String,
    age: Number
  });
  var Model = mongo.model("model", schema, "myCollection");
  var doc1 = new Model({ name: "John", age: 21 });
 


const app=express();
app.use(express.json());
const getres='you got the request';
app.post('/post',async(req,res,next)=>{
const name= req.body.name;
console.log(name);
club.collection.save(data);
next();
}
);

app.get('/get',async(req,res,next)=>{
    doc1.save(function(err, doc) {
        if (err) return console.error(err);
        console.log("Document inserted succussfully!");
      });
});
app.listen(3000);
mongo.connect('mongodb+srv://himu:himu@cluster0.szkh7.mongodb.net/test',{useNewUrlParser:true,useUnifiedTopology:true});

mongo.connection.once('open',()=>console.log('connected'))
.on('error',(e)=>{
console.log(error);
});
var db=mongo.connection;
   
 