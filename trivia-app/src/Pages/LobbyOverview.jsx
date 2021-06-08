import React, { Component } from 'react';
import TreeviaLogo from '../treevia_logo.jpg';
import { HubConnection, LogLevel, HubConnectionBuilder} from '@aspnet/signalr';
import $ from 'jquery';


class BannerClockClass extends React.Component {
    constructor(props){//constructor
        super(props);//super class props
        this.state = { //initial state
            date: new Date(),
            dev : true,
        };
    }
    
    render (){ // render the DOM
        return (
            <div id="main" className="lobby-overview">
               <ul id="main-list">
                   <li className="main-list-item">
                       <div className="main-list-item-panel">
                           <div className="main-list-item-panel-label">Lobby #1000 - Currently Online .</div>
                           <div className="main-list-item-panel-button"><button href="/lobby/1337" > Join </button></div>
                       </div>
                   </li>
                   <li className="main-list-item">
                       <div className="main-list-item-panel">
                           <div className="main-list-item-panel-label">Lobby #1000 - Currently in Session .</div>
                           <div className="main-list-item-panel-button"><button> Join </button></div>
                       </div>
                   </li>
                   <li className="main-list-item">
                       <div className="main-list-item-panel">
                           <div className="main-list-item-panel-label">
                               Lobby #1000 - Currently in Session .
                               </div>
                           <div className="main-list-item-panel-button">
                               <button> Join </button>
                               <button> Spectate </button>
                               <button> Report! </button>
                            </div>
                       </div>
                   </li>
                   <li className="main-list-item">
                       <div className="main-list-item-panel">
                           <div className="main-list-item-panel-label">Lobby #1000 - Currently in Session .</div>
                           <div className="main-list-item-panel-button"><button> Join </button></div>
                       </div>
                   </li>
                   <li className="main-list-item">
                       <div className="main-list-item-panel">
                           <div className="main-list-item-panel-label">Lobby #1000 - Currently in Session .</div>
                           <div className="main-list-item-panel-button"><button> Join </button></div>
                       </div>
                   </li>
                   <li className="main-list-item">
                       <div className="main-list-item-panel">
                           <div className="main-list-item-panel-label">Lobby #1000 - Currently in Session .</div>
                           <div className="main-list-item-panel-button"><button> Join </button></div>
                       </div>
                   </li>
                   <li className="main-list-item">
                       <div className="main-list-item-panel">
                           <div className="main-list-item-panel-label">Lobby #1000 - Currently in Session .</div>
                           <div className="main-list-item-panel-button"><button> Join </button></div>
                       </div>
                   </li>
                   <li className="main-list-item">
                       <div className="main-list-item-panel">
                           <div className="main-list-item-panel-label">Lobby #1000 - Currently in Session .</div>
                           <div className="main-list-item-panel-button"><button> Join </button></div>
                       </div>
                   </li>
                   <li className="main-list-item">
                       <div className="main-list-item-panel">
                           <div className="main-list-item-panel-label">Lobby #1000 - Currently in Session .</div>
                           <div className="main-list-item-panel-button"><button> Join </button></div>
                       </div>
                   </li>
                   <li className="main-list-item">
                       <div className="main-list-item-panel">
                           <div className="main-list-item-panel-label">Lobby #1000 - Currently in Session .</div>
                           <div className="main-list-item-panel-button"><button> Join </button></div>
                       </div>
                   </li>
                   <li className="main-list-item">
                       <div className="main-list-item-panel">
                           <div className="main-list-item-panel-label">Lobby #1000 - Currently in Session .</div>
                           <div className="main-list-item-panel-button"><button> Join </button></div>
                       </div>
                   </li>
                   <li className="main-list-item">
                       <div className="main-list-item-panel">
                           <div className="main-list-item-panel-label">Lobby #1000 - Currently in Session .</div>
                           <div className="main-list-item-panel-button"><button> Join </button></div>
                       </div>
                   </li>
                   <li className="main-list-item">
                       <div className="main-list-item-panel">
                           <div className="main-list-item-panel-label">Lobby #1000 - Currently in Session .</div>
                           <div className="main-list-item-panel-button"><button> Join </button></div>
                       </div>
                   </li>
                   <li className="main-list-item">
                       <div className="main-list-item-panel">
                           <div className="main-list-item-panel-label">Lobby #1000 - Currently in Session .</div>
                           <div className="main-list-item-panel-button"><button> Join </button></div>
                       </div>
                   </li>
                   <li className="main-list-item">
                       <div className="main-list-item-panel">
                           <div className="main-list-item-panel-label">Lobby #1000 - Currently in Session .</div>
                           <div className="main-list-item-panel-button"><button> Join </button></div>
                       </div>
                   </li>
                   <li className="main-list-item">
                       <div className="main-list-item-panel">
                           <div className="main-list-item-panel-label">Lobby #1000 - Currently in Session .</div>
                           <div className="main-list-item-panel-button"><button> Join </button></div>
                       </div>
                   </li>
                   <li className="main-list-item">
                       <div className="main-list-item-panel">
                           <div className="main-list-item-panel-label">Lobby #1000 - Currently in Session .</div>
                           <div className="main-list-item-panel-button"><button> Join </button></div>
                       </div>
                   </li>
                   <li className="main-list-item">
                       <div className="main-list-item-panel">
                           <div className="main-list-item-panel-label">Lobby #1000 - Currently in Session .</div>
                           <div className="main-list-item-panel-button"><button> Join </button></div>
                       </div>
                   </li>
                   <li className="main-list-item">
                       <div className="main-list-item-panel">
                           <div className="main-list-item-panel-label">Lobby #1000 - Currently in Session .</div>
                           <div className="main-list-item-panel-button"><button> Join </button></div>
                       </div>
                   </li>
                   <li className="main-list-item">
                       <div className="main-list-item-panel">
                           <div className="main-list-item-panel-label">Lobby #1000 - Currently in Session .</div>
                           <div className="main-list-item-panel-button"><button> Join </button></div>
                       </div>
                   </li>
                   <li className="main-list-item">
                       <div className="main-list-item-panel">
                           <div className="main-list-item-panel-label">Lobby #1000 - Currently in Session .</div>
                           <div className="main-list-item-panel-button"><button> Join </button></div>
                       </div>
                   </li>
                   <li className="main-list-item">
                       <div className="main-list-item-panel">
                           <div className="main-list-item-panel-label">Lobby #1000 - Currently in Session .</div>
                           <div className="main-list-item-panel-button"><button> Join </button></div>
                       </div>
                   </li>
                   <li className="main-list-item">
                       <div className="main-list-item-panel">
                           <div className="main-list-item-panel-label">Lobby #1000 - Currently in Session .</div>
                           <div className="main-list-item-panel-button"><button> Join </button></div>
                       </div>
                   </li>
                   <li className="main-list-item">
                       <div className="main-list-item-panel">
                           <div className="main-list-item-panel-label">Lobby #1000 - Currently in Session .</div>
                           <div className="main-list-item-panel-button"><button> Join </button></div>
                       </div>
                   </li>
                   <li className="main-list-item">
                       <div className="main-list-item-panel">
                           <div className="main-list-item-panel-label">Lobby #1000 - Currently in Session .</div>
                           <div className="main-list-item-panel-button"><button> Join </button></div>
                       </div>
                   </li>
                   <li className="main-list-item">
                       <div className="main-list-item-panel">
                           <div className="main-list-item-panel-label">Lobby #1000 - Currently in Session .</div>
                           <div className="main-list-item-panel-button"><button> Join </button></div>
                       </div>
                   </li>
                   <li className="main-list-item">
                       <div className="main-list-item-panel">
                           <div className="main-list-item-panel-label">Lobby #1000 - Currently in Session .</div>
                           <div className="main-list-item-panel-button"><button> Join </button></div>
                       </div>
                   </li>
                </ul>
                {/* <img src={TreeviaLogo} className="Treevia-logo" alt="Treevia" /> */}
            </div>
        );
    }
    
    componentDidMount() {//mount component resources
        //Notify User if there is a new lobby.//mount component resources
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

export default BannerClockClass;