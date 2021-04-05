import React, { Component } from 'react';

class BannerClockClass extends React.Component {
    constructor(props){//constructor
        super(props);//super class props
        this.state = { //initial state
            date: new Date()
        };
    }
    
    render (){ // render the DOM
        return (
            <div className="banner-top">
                <i>[BannerClockClass] It is {this.state.date.toLocaleTimeString()}.</i>
            </div>
        );
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