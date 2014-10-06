var socket=io.connect();
//Need a variable if received to prevent reemission

//Emitting the values to the server
$("INPUT.chooser").minicolors(
{
  theme:"bootstrap",
  changeDelay: 200,
  change:function(hex)
  {
    if(hex)
      socket.emit("starColor",{star:hex});
  }
});

$(".dropdown-menu li").click(function()
{
  var preset=$(this).text();
  if($("#presetText").text()!=preset)
  {
    $("#presetText").text(preset);
    socket.emit("starPreset",{star:preset});
  }
}); 

$("#starRange").on('input',function()
{
  socket.emit("starRange",{star:$(this).val()});
});

$("#deskRange").on('input',function()
{
  socket.emit("deskRange",{desk:$(this).val()});
});

//Receiving changes in page
socket.on("updateStarColor",function(color)
{
  $("INPUT.chooser").minicolors("value",color);
});

socket.on("updateStarPreset",function(preset)
{
  $("#presetText").text(preset);
});

socket.on("updateStarRange",function(range)
{
  $("#starRange").val(range);
});

socket.on("updateDeskRange",function(range)
{
  $("#deskRange").val(range);
});

