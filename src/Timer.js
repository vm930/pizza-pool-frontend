import React, { Component } from 'react';
import Countdown from 'react-countdown-now';
import Sound from 'react-sound';



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
              <Sound url="/song.mp3"
      playStatus={Sound.status.PLAYING}
      playFromPosition={300 /* in milliseconds */}
      onLoading={this.handleSongLoading}
      onPlaying={this.handleSongPlaying}
      onFinishedPlaying={this.handleSongFinishedPlaying} />
            </div>
          ) : <Countdown date={Date.now() + 30000} onComplete={this.handleComplete}/>}
        </div>
      )
    }

}

export default Timer;
