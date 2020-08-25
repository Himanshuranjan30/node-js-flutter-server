const express=require('express');
const app=express();
app.use(express.json());
const getres='you got the request';
app.post('/post',async(req,res,next)=>{
const name= req.body.name;
console.log(name);
next();
}
);

app.get('/get',async(req,res,next)=>{
res.end(getres);
res.json('hey from nodejs');
next();
}
);

app.listen(3000);
