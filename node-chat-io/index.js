const express=require("express");
const app=express();
const cors=require("cors");
app.use(cors())
const server=require("http").Server(app)

const io=require("socket.io")(server)
const port=5000;
const router=express.Router();

app.get('/',(req,res)=>{

 initial.on("connection",(socket)=>{
     console.log(socket)
 })


})


app.get('/java',(req,res)=>{
    res.sendFile(__dirname + "/public/java.html")
})
app.get('/swift',(req,res)=>{
    res.sendFile(__dirname + "/public/swift.html")
})
server.listen(port,()=>{
    console.log(`Server chat running on ${port}`)
})
/*io.on('connection',(socket)=>{
    console.log("user-connected")
})*/
//namespacing
const tech=io.of('/tech')
const initial=io.of("/")

tech.on('connection',(socket)=>{
    tech.emit('message',`Trying to connect!`)
    socket.on('join',(data)=>{
        socket.join(data.room)
        //socket.join(data.user)
        console.log(`New user ${data.user} joined ${data.room}  room!`)
        tech.in(data.room).emit('message',`New user joined ${data.room} room!`)
    })
console.log("user-connected")
socket.on('message',(data)=>{
    console.log(data.user)
    console.log(`message: ${data.msg} ${data.room} ${data.user}`);
    tech.emit('message',data.msg);
})
socket.on('disconnect',()=>{
    console.log("user-disconnected")
        tech.emit('message','user-disconnected');
    })
})

