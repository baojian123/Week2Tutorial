var express = require('express')
var path = require('path')
const app = express()

app.use('/login',function (req,res){
  {username:"123",
    password:"09280913"}

    req.body.username=username
    req.body.password=password
  res.sendFile(path.join(__dirname+'/ping.html'))
})


app.get('/ping',function(req,res){
  res.sendFile(path.join(__dirname+'/ping.html'))
});

app.get('/pong',function(req,res){
  res.sendFile(path.join(__dirname+'/pong.html'))
});

app.listen(3000, function(){
  console.log("Ping Pong Sever is running now !")
})
