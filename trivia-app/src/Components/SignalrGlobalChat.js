import React, { Component } from 'react';
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
                    <img src="https://picsum.photos/400" alt="ChatMessageIcon" />
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
                   <div className="top-navigation-link">1</div>
                   <div className="top-navigation-link">1</div>
                   <div className="top-navigation-link">1</div>
                   <div className="top-navigation-link">1</div>
                </div> 
            </div>
        );
    }
    
    componentDidMount() {//mount component resources
        const hubConnection = new HubConnectionBuilder()
            .withUrl("https://localhost:5001/learningHub")
            .configureLogging( LogLevel.Information)
            .build();


            console.log('didmount');
            console.log(hubConnection);
            hubConnection.on("MessageToAll", (message) => {
                $('#signalr-message-panel').prepend($('<div />').text(message));
            });

             hubConnection.on("ReceiveMessage", (message) => {
                $('#signalr-message-panel').prepend($('<div />').text(message));
            });
             
            $('#btn-broadcast').click(function () {
                var message = $('#broadcast').val();
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

export default SignalrGlobalChat;