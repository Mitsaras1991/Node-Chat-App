import React from 'react';
import logo from './logo.svg';
import './App.css';
import io,{socketIOClient,openSocket} from 'socket.io-client';
import MessageBox from './MessageBox'
class App extends React.Component {

  constructor(props){
    super(props)
    this.state={
      data:null,
      socket:io("http://localhost:5000/tech"),
      room:"java",
      messages:[],
      msg:null,
      user:"Dimitris"
    }
 
    
    
  }
 
  componentDidMount(){
    const {socket,room,user}=this.state
    console.log(socket)
    socket.emit('join',{room,user})
    socket.on('message',(msg)=>{
      console.log(msg)
      let messageArray=this.state.messages
      messageArray.push(msg);
      this.setState({msg})
    })



   
  }
  handleSumbit=(e)=>{
    e.preventDefault()
    let data={msg:"Hi", room:"java" ,user:"Dimitris"}
    this.state.socket.emit('message', {msg:"Hi",room:"java" ,user:"Dimitris"})
  }
  render(){
    return (
      <div className="App">
        <h5>{this.state.room}</h5>
        <MessageBox message={this.state.msg}/>
        <button type="sumbit" onClick={this.handleSumbit}>Send</button>
      </div>
    );
  }
  
}

export default App;
