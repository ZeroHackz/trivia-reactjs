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
        <div className="row">
            <div className="col-md-4">
                <div className="control-group">
                    <div>
                        <label htmlFor="broadcast">Message</label>
                        <input type="text" id="broadcast" name="broadcast" />
                    </div>
                    <button id="btn-broadcast">Broadcast</button>
                </div>
                <div className="control-group">
                    <div>
                        <label htmlFor="self-message">Message</label>
                        <input type="text" id="self-message" name="self-message" />
                    </div>
                    <button id="btn-self-message">Send to Self</button>
                </div>
                <div className="control-group">
                    <div>
                        <label htmlFor="others-message">Message</label>
                        <input type="text" id="others-message" name="others-message" />
                    </div>
                    <button id="btn-others-message">Send to Others</button>
                </div>
                <div className="control-group">
                    <div>
                        <label htmlFor="group-message">Message</label>
                        <input type="text" id="group-message" name="group-message" />
                    </div>
                    <div>
                        <label htmlFor="group-for-message">Group Name</label>
                        <input type="text" id="group-for-message" name="group-for-message" />
                    </div>
                    <button id="btn-group-message">Send to Group</button>
                </div>
                <div className="control-group">
                    <div>
                        <label htmlFor="group-to-add">Group Name</label>
                        <input type="text" id="group-to-add" name="group-to-add" />
                    </div>
                    <button id="btn-group-add">Add User to Group</button>
                </div>
                <div className="control-group">
                    <div>
                        <label htmlFor="group-to-remove">Group Name</label>
                        <input type="text" id="group-to-remove" name="group-to-remove" />
                    </div>
                    <button id="btn-group-remove">Remove User from Group</button>
                </div>
            </div>
        
            <div className="col-md-7">
                <p>SignalR Messages:</p>
                <pre id="signalr-message-panel"></pre>
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