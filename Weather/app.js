const express=require("express");
const htpps=require("https");
const app=express();
app.get("/",function(req,res)
{
	const url=https.get("https://api.openweathermap.org/data/2.5/weather?q=London&appid=03098651572565915a0ca5cfd2fc3a24");
https.get(url,function(response)
{
	console.log(response.statusCode);
	response.on("data",function(data)
		{
			const weatherdata=JSON.parse(data);
			const temp=weatherdata.main.temp;
			const weatherdesc=weatherdata.weather[0].description;
			const icon=weatherdata.weather[0].icon;
			const imageurl="https://openweathermap.org/img/wn/"+icon+"@2x.png";
			res.write("The weather in London is "+temp+" Degree Celcius");
			res.write("<img src"+imageurl+">");
			res.send();
		});
});
})
app.listen(3000,function()
{
console.log("server is running at port 3000");
});
