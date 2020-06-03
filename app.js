var express=require('express');
var bodyparser=require("body-parser")
const server=express();
var data=[
    {Name:"Ram",Age:12,Sub:"Maths"},
    {Name:"John",Age:13,Sub:"chemistry"},
    {Name:"smith",Age:14,Sub:"botany"}];
server.use(bodyparser.urlencoded({extended:true}))

server.set("view engine","ejs");

server.set("views","./pages")

server.get("/",function(req,res){
   res.render("login")
})
server.get("/home",function(req,res){
    res.render("home",)
})
server.get("/aboutus",function(req,res){
    res.render("aboutus")
})
server.get("/services",function(req,res){
    res.render("services")
})
server.get("/login",function(req,res){
    res.send("login page")
})
server.post("/validate",function(req,res){
    var user=req.body.userid;
    console.log(user)
    var password=req.body.pass;
    console.log(password)
    if(user=="admin"&&password=="pass@123"){
        res.render("home",{students:data})
    }
    else{
        res.render("login")
    }
   
})
server.post("/check",function(req,res){
    
})
server.listen(process.env.PORT||3000,function(){
console.log("server started")
})