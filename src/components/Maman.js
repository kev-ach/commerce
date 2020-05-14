import React, { Component } from 'react';
import Toto from './Toto';

class Maman extends Component {
  state = {
    messageMaman: null,
    messageToto: null,
    valApi: {}
  }

  componentDidMount(){
    fetch('https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=DFC228A7E5B7B2063896B863EA83E143&steamids=76561197999900652')
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        this.setState({ valApi: result })
      })
  }

  ordreMaman = () => {
    this.setState({
      messageMaman: 'Va ranger ta chambre'
    })
  }

  reponseToto = () => {
    this.setState({
      messageToto: 'D\'accord maman'
    })
  }

  render() {
    return (
      <div>
        <h1>Maman</h1>
        <button onClick={this.ordreMaman}>Ordre de la mère</button>
        <p>{}</p>
        <h1>Apercu de l'API JSON</h1>

        <hr />

        <Toto name="ACHICHE" reponseDeToto={this.reponseToto} leState={this.state}/>

      </div>
    )
  }


}

export default Maman;
