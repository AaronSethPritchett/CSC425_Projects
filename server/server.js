var express = require('express');
var app = express();
//var server = require('http').createServer(app).listen(3000);
app.use(express.static('public'));
app.set('view engine', 'ejs');
//var server = require('http').Server(app);
//var io = require('socket.io')(server);

app.get('/', function(req, res){
   res.render('index');
    console.log("something connected");
});


//
var io = require('socket.io').listen(app.listen(3000));
var numOfPlayer = 1;
var startSymbol;
io.sockets.on('connection', function (socket) {
    if(numOfPlayer % 2 == 0)
        {
            startSymbol = "X";
            numOfPlayer++;
        }
    else
        {
            startSymbol = "O";
            numOfPlayer++;
        }
    socket.emit('message', { message: startSymbol});
    
    socket.on('send', function (data) {
        io.sockets.emit('message', data);
        console.log(data);
    });
});