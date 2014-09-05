var express=require('express.io');
var spark=require('sparkcloud')('9bb8d63f19eb5b589722ada428b1a93d4eedf11e');
var app=express();

app.http().io();
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
});

app.listen(8888);
console.log("Server started and running.");