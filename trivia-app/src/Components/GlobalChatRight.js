import React, { Component } from 'react';
import logo from '../treevia_logo.jpg';
import { HubConnection, LogLevel, HubConnectionBuilder} from '@aspnet/signalr';
import $ from 'jquery';


class GlobalChatRight extends React.Component {
    constructor(props){//constructor
        super(props);//super class props
        this.state = { //initial state
            date: new Date(),
            hubConnection: null,
            logLevel :null,
            loggedIn : true,
            hubConnectionMessage: '',     
            dev : true,              
        };
    }
    
    
    render (){ // render the DOM
        return (
            <div id="global-chat" className="container">
            <div className="row">
                <div className="col msg-window-container">
                 
                <div className="card" id="msgWindow"> 
                {/* <div style={{color: 'black'}}>Global Chat</div> */}
                    <div className="card-header"><span className="card-title">Chat within Global Chat</span></div>
                    <div className="card-body" id="msgs">
                    <div className=""><b>WELCOME TO GLOBAL CHAT</b></div>
                    </div>
                    <div className="card-footer">
                    <div className="input-group" id="msgForm" data-sender="me">
                        <input className="form-control" type="text" placeholder="Type message and hit [Enter] to send."/>
                        <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button">Send</button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            </div>
        );
    }
    
    componentDidMount() {//mount component resources
        let signalrDomain = "singlr-domain";  

        if(this.dev){
            signalrDomain = "https://i458461core.venus.fhict.nl/";  
        } else {
            signalrDomain = "https://localhost:44324/";
        }   
        const signalrHub = "globalchat";
        const hubConnection = new HubConnectionBuilder()
                                .withUrl(signalrDomain+signalrHub, { accessTokenFactory: () => this.loginToken })
                                .configureLogging(LogLevel.Information)
                                .build();
        hubConnection.Credentials = true;        

        $(function () {

            // Define some elements from the DOM and utility methods.
            let $form = $("#msgForm"),
            $newMsg = $form.find("input"),
            $sendBtn = $form.find("button"),
            $feed = $("#msgs"),
            _wait = ms => new Promise((r, j) => setTimeout(r, ms)), // See [0]
            _secs = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
          
            // Define our send method.
            var _send = data => {
              // Send data to a new .msg
              let $msg = $('<div class="msg from"></div>');
            //   $msg.addClass("from");
              $msg.text(data.msg);
              hubConnection.invoke("MessageToOthers", data.msg).catch(err => console.error(err.toString()));
              $msg.appendTo($feed);
              $newMsg.val(""); // If sending was successful, clear the text field.
            };
            hubConnection.on("ReceiveMessage", (object) => {
                console.log("Message received");
                console.log(object);
                var objectSender = '-server';
                if ('senderConnectionId' in object && object.senderConnectionId !== undefined) {
                    objectSender = object.senderConnectionId;
                }
                if ('identity' in object && object.identity.isAuthenticated && object.identity.name === undefined) {
                    objectSender = object.identity.name;
                }
                var objectMessage = object.message;
                var objectTimestamp = object.timestamp;
                var formatTimestamp = new Date(object.timestamp);
                console.log("formated time stamp:");
                console.log(formatTimestamp);
                var chatSyntaxTimeSent = "@[" + formatTimestamp.toLocaleString() + "]";
                var chatSyntaxSenderName = "Client[" + objectSender + "]" + " says : ";
                var chatSyntaxMessage = objectMessage;
                $('#msgs').append($('<div class="msg-timestamp"></div>').text(chatSyntaxTimeSent));
                $('#msgs').append($('<div class="msg-sender"></div>').text(chatSyntaxSenderName));
                $('#msgs').append($('<div class="msg to"></div>').text(chatSyntaxMessage));
            });

          
            // Define event handlers: Hitting Enter or Send should send the form.
            $newMsg.on("keypress", function (e) {
              // @TODO: Allow [mod] + [enter] to expand field & insert a <BR>
              if (e.which === 13) {
                // Stop the prop
                e.stopPropagation();e.preventDefault();
                // Wrap the msg and send!
                let theEnvelope = {
                  msg: $newMsg.val(),
                  sender: "me" };
          
                return _send(theEnvelope);
              } else {
                // goggles
              }
            });
            $sendBtn.on("click", function (e) {
              // Stop the prop
              e.stopPropagation();e.preventDefault();
              // Wrap the msg and send!
              let theEnvelope = {
                msg: $newMsg.val(),
                sender: "me" };
          
              return _send(theEnvelope);
            });
          });
        
        
          
        
        async function start() {
            try {
                await hubConnection.start();
                console.log('connected');
            } catch (err) {
                console.log(err);
                setTimeout(() => start(), 5000);
            }
        };
        
        hubConnection.onclose(async () => {
            await start();
        });
        
        start();
          
    }

    componentWillUnmount() {//unmount component resources
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({date: new Date()});
    }

    HubCallback() {

    }
    asyncStateUpdate() {//make use of the previous state 
        this.setState(//shallow merge object into current state object
            (state, props) => (
                {
                    counter: state.counter + props.increment
                }
            )
        );
    }
}

export default GlobalChatRight;