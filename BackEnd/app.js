let app = require('express')()
let http = require('http').Server(app)
let io = require('socket.io')(http)
let port = 3030

io.on('connection', function(socket){
    console.log('Someone connected')
    socket.on('message', function(msg){
        console.log(msg)
    })
})

http.listen(port, function(){
    console.log('listening on ' + port + ' port')
})
