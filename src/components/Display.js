import React, { Component } from 'react';
import Users from './Singers';

class Display extends Component {
  render() {
    return(
      <div>
        <h1>Musiciens</h1>
        <Users name="Eric Clapton" age="74"/>
        <Users name="Johnny Hallyday" age="90"/>
        <Users name="Serge Gainsbourg" age="54"/>
        <Users name="Jimi Hendrix" age="27"/>
      </div>
    )
  }
}

export default Display;
