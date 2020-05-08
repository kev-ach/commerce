import React , { Component } from 'react';
import HeaderMenu from './components/HeaderMenu';
import MenuGauche from './components/MenuGauche';
import Maman from './components/Maman';
import Display from './components/Display';
import Result from './components/Game';
import Form from './Form';
import './App.css';

class App extends Component {

  render(){
    return (
      <div className="App">
        <HeaderMenu />
        <MenuGauche />
        <br/><hr /><br/>
        <Maman />
        <br/><hr /><br/>
        <Display />
        <Result />
        <br/><hr /><br/>
        <Form />
        <br/><hr /><br/>
      </div>
    );
  }

}

export default App;
