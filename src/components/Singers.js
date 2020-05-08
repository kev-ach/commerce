import React, { Component } from 'react';

class Users extends Component {

  render(){

    const {name, age} = this.props;
    return(
      <div>
        <p>Chanteur : {name}</p>
        <p>Age : {age}</p>
      </div>
    )
  }
}


export default Users;
