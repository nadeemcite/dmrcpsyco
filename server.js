var express=require('express');
var app=express();
var PORT=process.env.PORT||8080;
app.use(express.static('./public'));
app.listen(PORT,err=>{
	console.log(err||("Running on"+PORT));
});