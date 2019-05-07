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
          {this.state.delivered ? (
            <div class="pyro">
              <div class="before"><h4>Out For Delivery</h4></div>
              <div class="after">
              </div>
            </div>
          ) : <Countdown date={Date.now() + 30000} onComplete={this.handleComplete}/>}
        </div>
      )
    }

}

export default Timer;
