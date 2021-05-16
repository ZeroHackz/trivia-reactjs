import React, { Component } from 'react';
import TreeviaLogo from '../treevia_logo.jpg';
import signalrglobalchat from './SignalrGlobalChat';


class BannerClockClass extends React.Component {
    constructor(props){//constructor
        super(props);//super class props
        this.state = { //initial state
            date: new Date()
        };
    }
    
    render (){ // render the DOM

        let renderedDom = []; 

        for (let index = 0; index < 40; index++) {
            renderedDom.push(
                    <li className="main-list-item">
                        <div className="main-list-item-panel">
                            <div className="main-list-item-panel-label">Lobby # { index +954} - Currently in Session .</div>
                            <div className="main-list-item-panel-button">
                                <button> Join </button>
                                <button> Spectate </button>
                                <button> Report! </button>
                            </div>
                        </div>
                    </li>
            );
        }

        return (renderedDom);
    }
    
    componentDidMount() {//mount component resources
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