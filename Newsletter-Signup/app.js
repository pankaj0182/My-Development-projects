const express=require('express');
const bodyparser=require("body-parser");
const request=require("request");
const app=express();
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));
app.get("/",function(req,res)
{
 res.sendFile('signup.html', {root: __dirname })
});
app.post("/",function(req,res)
{
var firstname=req.body.fname;
var lastname=req.body.lname;
var email=req.body.email;
console.log(firstname,lastname,email);
});
app.listen(process.env.PORT || 3000,function()
{
  console.log("server running ");
});
