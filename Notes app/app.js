const express = require("express");
const bodyParser=require("body-parser");

const app = express();

let notes = ["Add your to do list in here"]; //use let instead of var since let is local and var is global
let workItems=[];


app.set('view engine', 'ejs'); // use ejs as it view engine

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/",function(req,res) {

	let today =  new Date();
	
	let options ={
		weekday: "long",
		day: "numeric",
		month: "long"
	};

	let day= today.toLocaleDateString("en-US",options); 

	res.render("list", { listTitle: day,
		                 newNotes:  notes  }) ; // reason why we add here is cant have two render stateemets

});
app.post("/", function(req,res){
	let list=req.body.inputednote;
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