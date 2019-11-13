import React from 'react'
import io,{socketIOClient,openSocket} from 'socket.io-client';

class socket{
    
    constructor(){
        this.state={
            socket:io("http://localhost:4000/tech")
        }

    }

   onMessage=()=>{
       this.state.socket.on('message',(msg)=>{
           console.log(msg);
       })
   }
}
class WebSocket extends React.Component{
    render(){
        
    }
}