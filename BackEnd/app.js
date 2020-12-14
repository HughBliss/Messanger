const express = require('express')
const bodyParser = require('body-parser')
const socket = require('socket.io')
const cors = require('cors')

const port = process.env.APP_PORT || 3000

const app = new express()
app.use(bodyParser.json())
app.use(cors())

app.get('/', async (req, res) => {
    res.send('ok');
})

var server = app.listen(port, () => {
    console.log(`I am running at PORT ${port}`)
})

const io = socket(server);

io.on("connection", function (socket) {
    console.log("Socket Connection Established with ID :" + socket.id)
    socket.on("chat", async function (chat) {
        chat.created = new Date()
        socket.emit("chat", chat)
    })
})
