const express = require("express");
const bodyParser=require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true})); //urlencoded used to acccess the form data /and extend must be true explicitly(Reccomended)

app.get("/",function(req,res) {
	res.sendFile(__dirname +"/index.html"); //or simply the relative path
});

app.post("/",function(req,res){
	var num1=Number(req.body.num1); //bodyParser we can parse http request(get what is in the body)
	var num2=Number(req.body.num2); //Explicitly definig as a number
	var result=num1+num2;
	res.send("The sum of the two numbers is "+ result); 
});

app.listen(3000,function(){
	console.log("Server is running in port 3000");
});