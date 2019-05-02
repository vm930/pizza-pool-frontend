import React, { Component } from 'react';

class User extends Component {

  render(){
    return (
      <div>
        {this.props.user.name}
      </div>
    )
  }

}

export default User;
