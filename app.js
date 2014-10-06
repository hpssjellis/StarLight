var express=require('express.io');
var spark=require('sparkcloud')('9bb8d63f19eb5b589722ada428b1a93d4eedf11e');
var app=express();


//Variables used in the webpage
var color="#0000ff";
var preset="White";
var starRange=100;
var deskRange=100;

app.http().io();
//app.use("view engine","jade");
app.use("/css",express.static(__dirname+"/public/css"));
app.use("/js",express.static(__dirname+"/public/js"));
app.use("/images",express.static(__dirname+"/public/images"));

/*
var core=spark.device('50ff6e065067545634270287');
var val=0;
core.func('switchLED',val,function(){});
*/

app.get('/',function(req,res)
{
  res.sendfile(__dirname+'/views/index.html');
  //res.render(__dirname+"/views/index.jade");
});

app.io.route("starColor",function(req)
{
  color=req.data.star;
  console.log(color);
  app.io.broadcast("updateStarColor",color);
});

app.io.route("starPreset",function(req)
{
  preset=req.data.star;
  console.log(preset);
  app.io.broadcast("updateStarPreset",preset);
});

app.io.route("starRange",function(req)
{
  starRange=req.data.star;
  console.log(starRange);
  app.io.broadcast("updateStarRange",starRange);
});

app.io.route("deskRange",function(req)
{
  deskRange=req.data.desk;
  console.log(deskRange);
  app.io.broadcast("updateDeskRange",deskRange);
});

app.listen(8888);
console.log("Server started and running.");
