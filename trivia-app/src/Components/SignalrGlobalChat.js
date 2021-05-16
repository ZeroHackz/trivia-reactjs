import React, { Component } from 'react';
import logo from '../treevia_logo.jpg';
import { HubConnection, LogLevel, HubConnectionBuilder} from '@aspnet/signalr';
import $ from 'jquery';


class SignalrGlobalChat extends React.Component {
    constructor(props){//constructor
        super(props);//super class props
        this.state = { //initial state
            date: new Date(),
            hubConnection: null,
            logLevel :null,
            hubConnectionMessage: '',            
        };
    }
    
    
    render (){ // render the DOM
        return (
            <div id="top-chat">
                <div id="top-chatbox-img">
                    {/* <b className="material-icons">chat</b> */}
                    {/* <img src="https://openclipart.org/image/2400px/svg_to_png/247319/abstract-user-flat-3.png" alt="ChatMessageIcon" /> */}
                    {/* <img src="https://picsum.photos/400" alt="ChatMessageIcon" /> */}
                    <img className="top-chatbox-logo"src={logo} alt="ChatMessageIcon" />
                    
                    {/* <img src="https://icons.iconarchive.com/icons/pixelkit/flat-jewels/512/Chat-icon.png" alt="ChatMessageIcon" /> */}
                </div>
                <div id="top-chatbox">
                    <div id="top-chatbox-panel">
                        <pre id="signalr-message-panel">
                            <p id="top-chat-important">Welcome to the GLOBAL TRIVA CHAT!</p>
                            <br/>
                        </pre>
                    </div>
                    <div id="top-chatbox-input">
                        
                        <label htmlFor="broadcast"></label>
                        <input type="text" id="broadcast" name="broadcast" />
                                            </div>
                    <div id="top-chatbox-broadcast">                        
                        <button id="btn-broadcast">Broadcast</button>
                    </div>
                </div>
                <div id="top-navigation">
                   <div className="top-navigation-link"><button>Add Group</button></div>
                   <div className="top-navigation-link"><button>Remove Group</button></div>
                   <div className="top-navigation-link"><button>Group Message</button></div>
                   {/* <div className="top-navigation-link"><button> PM</button></div> */}
                </div> 
            </div>
        );
    }
    
    componentDidMount() {//mount component resources
            // const singalrEndPoint = prompt("Do you want to use specific end-point?");

        
        // let suggestEndPoint = prompt("Do you want to use specific end-point?","https://localhost:5001/learningHub");
   /*              if (suggestEndPoint!=null){ 
                    return suggestEndPoint;
                } else { 
                    return "https://localhost:5001/learningHub";
                } */

            // const singalrEndPoint = suggestEndPoint ?? 'https://localhost:5001/learningHub'
            // console.log("singalR End Point");
            // console.log(singalrEndPoint);
            const hubConnection = new HubConnectionBuilder()
               // .withUrl(singalrEndPoint)
                // .withUrl('https://localhost:44324/hubstandard')
                .withUrl('https://trivia-api20210516141229.azurewebsites.net:44324/globalchat', { accessTokenFactory: () => this.loginToken })
                .configureLogging( LogLevel.Information)
                .build();
            
        
            console.log('didmount');
            console.log(hubConnection);
            hubConnection.on("MessageToAll", (message) => {
                $('#signalr-message-panel').prepend($('<div />').text(message));
            });

            hubConnection.on("ReceiveMessage", (receivedMessage) => {
                console.log('received a new message');
                console.log(receivedMessage);
               $('#signalr-message-panel').prepend($('<div />').text(receivedMessage));
            });

            hubConnection.on("ReceiveMessageObject", (receivedMessageObject) => {
                console.log('received a new message object');
                console.log(receivedMessageObject);
                let messageTimestamp =  this.dateToMessageTimestamp(receivedMessageObject.timestamp);

               $('#signalr-message-panel').prepend($('<div />')
                    .text(
                         messageTimestamp +
                        receivedMessageObject.displayname +': '+ 
                        receivedMessageObject.message
                    )
                );
            });
             
            $('#btn-broadcast').click(function () {
                var message = $('#broadcast').val();
                console.log('broadcasting a new message');
                console.log(message);
                hubConnection.invoke("BroadcastMessage", message).catch(err => console.error(err.toString()));
            });
             
            $('#btn-self-message').click(function () {
                var message = $('#self-message').val();
                hubConnection.invoke("SendToCaller", message).catch(err => console.error(err.toString()));
            });
             
            $('#btn-others-message').click(function () {
                var message = $('#others-message').val();
                hubConnection.invoke("SendToOthers", message).catch(err => console.error(err.toString()));
            });
             
            $('#btn-group-message').click(function () {
                var message = $('#group-message').val();
                var group = $('#group-for-message').val();
                hubConnection.invoke("SendToGroup", group, message).catch(err => console.error(err.toString()));
            });
             
            $('#btn-group-add').click(function () {
                var group = $('#group-to-add').val();
                hubConnection.invoke("AddUserToGroup", group).catch(err => console.error(err.toString()));
            });
             
            $('#btn-group-remove').click(function () {
                var group = $('#group-to-remove').val();
                hubConnection.invoke("RemoveUserFromGroup", group).catch(err => console.error(err.toString()));
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


        this.timerID = setInterval(
            () => this.tick(),
            1000
        ); // ask broswer to invoke the tick method every second.


    }

    componentWillUnmount() {//unmount component resources
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({date: new Date()});
    }

    dateToMessageTimestamp(date) {
        let givenDate = new Date(date);
        console.log('creating timestamp of:');
        console.log(givenDate);
        let timestampFormat = '['+ givenDate.toLocaleTimeString() + ']'
        return timestampFormat;
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

export default SignalrGlobalChat;