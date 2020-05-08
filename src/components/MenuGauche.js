import React, { Component, Fragment } from 'react';

class MenuGauche extends Component {

  state = {
    voitures: [
      {name: 'Ford', color: 'yellow', year: 2000},
      {name: 'Mercedes', color: 'grey', year: 1994},
      {name: 'Ferrari', color: 'red', year: 2004}
    ],
    titre: 'Mon catalogue de voitures 2'
  }

  addTenYears = () => {
    const updatedState = this.state.voitures.map((param) => {
      return param.year -= 10;
    })
    this.setState({
      updatedState
    })
  }

  render() {

    const year = new Date().getFullYear();

    return (
      <div className="left-container container">
        <div className="menu-box block">
          <h2 className="titular">MENU BOX</h2>
          <ul className="menu-box-menu">
            <li>
              <a className="menu-box-tab" href="#6"><span className="icon fontawesome-envelope scnd-font-color"></span>Messages<div className="menu-box-number">24</div></a>
            </li>
            <li>
              <a className="menu-box-tab" href="#8"><span className="icon entypo-paper-plane scnd-font-color"></span>Invites<div className="menu-box-number">3</div></a>
            </li>
            <li>
              <a className="menu-box-tab" href="#10"><span className="icon entypo-calendar scnd-font-color"></span>Events<div className="menu-box-number">5</div></a>
            </li>
            <li>
              <a className="menu-box-tab" href="#12"><span className="icon entypo-cog scnd-font-color"></span>Account Settings</a>
            </li>
            <li>
              <a className="menu-box-tab" href="#13">
                <sapn className="icon entypo-chart-line scnd-font-color"></sapn>Statistics
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default MenuGauche;
