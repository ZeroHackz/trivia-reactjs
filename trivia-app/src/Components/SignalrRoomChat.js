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