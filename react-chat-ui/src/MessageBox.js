import React from 'react'
const MessageList=({messageList})=>(
    
        messageList.map((ms,i)=><div key={i}>{ms.message}</div>)
  

)
 class  MessageBox extends React.Component{
     constructor(props){
         super(props)
         this.state={
             messageList:[]
         }
     }
     componentWillReceiveProps(newProps){
         console.log(newProps)
         let messages=this.state.messageList
         messages.push(newProps)
         
         this.setState({messageList:messages})
     }

     render(){

        
            const messages=this.state.messageList.map((ms,i)=>
                <MessageList key={i} message={ms}/>);
        
             if(this.state.messageList.length===0) return(<div>Loading Messages</div>)
             else  return (
             <div>
                <MessageList messageList={this.state.messageList}/>
            </div>)
     
 }
 }

export default MessageBox;