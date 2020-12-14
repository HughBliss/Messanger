let app = require('express')()
let http = require('http').Server(app)
let io = require('socket.io')(http)
let cors = require('cors')
let port = 3030

app.use(cors({
    origin: 'http://192.168.10.32:8080',
    credentials:true
}));

app.use(function (req, res, next) {

    res.header('Access-Control-Allow-Origin', "http://localhost:3030");
    res.header('Access-Control-Allow-Headers', true);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});

io.on('connection', function(socket){
    console.log('Someone connected')
    socket.on('message', function(msg){
        console.log(msg)
    })
})

app.get('/', () => console.log('hey'))

http.listen(port, function(){
    console.log('listening on ' + port + ' port')
})
