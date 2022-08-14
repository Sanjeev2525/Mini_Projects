const express = require("express");
const bodyParser=require("body-parser");

const app = express();

var notes = ["Add your to do list in here"];

app.set('view engine', 'ejs'); // use ejs as it view engine

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res) {

	var today =  new Date();
	
	var options ={
		weekday: "long",
		day: "numeric",
		month: "long"
	};

	var day= today.toLocaleDateString("en-US",options); 

	res.render('list', { WhichDay: day,
		                 newNotes:  notes  }) ; // reason why we add here is cant have two render stateemets

});
app.post("/",function(req,res){
	var list=req.body.newNote;
	notes.push(list);
	res.redirect("/") //redirects
});

		



  

app.listen(3000,function(){
	console.log("Server is running in port 3000");
});