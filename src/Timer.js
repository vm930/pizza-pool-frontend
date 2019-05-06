import React, { Component } from 'react';
import Countdown from 'react-countdown-now';


class Timer extends React.PureComponent {

  state = {
    delivered: false
  }


  handleComplete = () => {
    this.setState({
      delivered: true
    })
    this.props.fetchDelete()
  }

    render(){
      return(
        <div>
          {this.state.delivered ? <h4>Out For Delivery</h4> : <Countdown date={Date.now() + 10000} onComplete={this.handleComplete}/>}
        </div>
      )
    }

}

export default Timer;
