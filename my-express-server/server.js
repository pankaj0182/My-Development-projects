const express=require("express");
const app=express();
app.get("/",function(req,res)
{
  res.send("<h1>Hello World!</h1>");
});
app.get("/contact",function(req,res)
{
  res.send("Contact Me at: pankaj01.panwar@gmail.com");
});
app.listen(3000,function()
{
  console.log("server is listening at port 3000");
});
