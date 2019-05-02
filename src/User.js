import React, { Component } from 'react';

class User extends Component {

  render(){
    return (
      <div>
        {this.props.user.user_name} - Slices: {this.props.user.slices}
      </div>
    )
  }

}

export default User;
