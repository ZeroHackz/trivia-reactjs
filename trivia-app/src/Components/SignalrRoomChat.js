import React, { Component } from 'react';
import { HubConnection, LogLevel, HubConnectionBuilder} from '@aspnet/signalr';
import $ from 'jquery';


class SignalrRoomChat extends React.Component {
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
            <div id="main-chat">
                <div id="room-chatbox-top">
                    TopBanner
                    {/* <b className="material-icons">chat</b> */}
                    {/* <img src="https://openclipart.org/image/2400px/svg_to_png/247319/abstract-user-flat-3.png" alt="ChatMessageIcon" /> */}
                    {/* <img src="https://picsum.photos/400" alt="ChatMessageIcon" /> */}
                    {/* <img src="https://icons.iconarchive.com/icons/pixelkit/flat-jewels/512/Chat-icon.png" alt="ChatMessageIcon" /> */}
                </div>
                <div id="room-chatbox">
                    <div id="room-chatbox-panel">
                        <pre id="room-signalr-message-panel">
                            <p id="room-chat-important">Welcome to the Room chat.</p>
                            <br/>
                        </pre>
                    </div>
                    <div id="room-chatbox-input">
                        
                        <label htmlFor="room-broadcast"></label>
                        <input type="text" id="room-broadcast" name="broadcast" />
                    </div>
                    <div id="room-chatbox-broadcast">                        
                        <button id="room-btn-broadcast">Broadcast</button>
                    </div>
                </div>
            </div>
        );
    }
    
    componentDidMount() {//mount component resources
            // const singalrEndPoint = prompt("Do you want to use specific end-point?");

        
        //let suggestEndPoint = prompt("Do you want to use specific end-point?","https://localhost:5001/learningHub");
   /*              if (suggestEndPoint!=null){ 
                    return suggestEndPoint;
                } else { 
                    return "https://localhost:5001/learningHub";
                } */

            // const singalrEndPoint = 'https://localhost:5001/learningHub'
            // console.log("singalR End Point");
            // console.log(singalrEndPoint);
            const hubConnection = new HubConnectionBuilder()
                // .withUrl(singalrEndPoint)
                .withUrl('https://localhost:5001/learningHub')
                .configureLogging( LogLevel.Information)
                .build();
            
           


            console.log('didmount');
            console.log(hubConnection);
            hubConnection.on("MessageToAll", (message) => {
                $('#room-signalr-message-panel').prepend($('<div />').text(message));
            });

             hubConnection.on("ReceiveMessage", (message) => {
                $('#room-signalr-message-panel').prepend($('<div />').text(message));
            });
             
            $('#btn-broadcast').click(function () {
                var message = $('#room-broadcast').val();
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

export default SignalrRoomChat;