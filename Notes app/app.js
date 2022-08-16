const express = require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");

const app = express();

const notes = ["Add your to do list in here"]; //use let instead of var since let is local and var is global
const workItems=[]; //You can use const for array if you push elements.


app.set('view engine', 'ejs'); // use ejs as it view engine

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/",function(req,res) {

	 const day = date.getDay();

	res.render("list", { listTitle: day,
		                 newNotes:  notes  }) ; // reason why we add here is cant have two render stateemets

});
app.post("/", function(req,res){
	const list=req.body.inputednote;
	console.log(req.body);
	if(req.body.list==="Work"){
		workItems.push(list);
		res.redirect("/work")
	}else{
		notes.push(list);
		res.redirect("/"); //redirects	
	}
	
});


app.get("/work", function(req,res){
	res.render("list", { listTitle: "Work List" ,
		                 newNotes:  workItems  }) ;

});		




  

app.listen(3000,function(){
	console.log("Server is running in port 3000");
});