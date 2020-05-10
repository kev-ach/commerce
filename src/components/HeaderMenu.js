import React, { Component } from 'react';
import logo_sport from '../images/asos_logo.png';

class HeaderMenu extends Component {

  state = {
    searchValue: ''
  }

  getSearch = e => {
    this.setState({
      searchValue: e.target.value
    })
  }

  render() {

    const btnSearch = this.state.searchValue !== "" ? <span className="icon fontawesome-search scnd-font-color pointer" onClick={this.valideSearch}></span> : <span className="icon fontawesome-search scnd-font-color"></span>;

    return (
      <div>
        <header className="block">
          <div className="profile-menu">
            <div className="profile-picture small-profile-picture">
              <img width="150px" alt="Logo Musculation" src={logo_sport} />
            </div>
          </div>
          <div className="search">
            <input type="text" className="input-search" autoComplete="off" placeholder="Rechercher" maxLength="150" onChange={this.getSearch} value={this.state.searchValue}/>
          </div>
          {btnSearch}
          <ul className="header-menu horizontal-list">
            <li>
              <a className="header-menu-tab" href="#2"><span className="icon fontawesome-user scnd-font-color"></span>Compte</a>
            </li>
            <li>
              <a className="header-menu-tab" href="#3"><span className="icon fontawesome-envelope scnd-font-color"></span>Messages</a>
              <a className="header-menu-number" href="#4">5</a>
            </li>
            <li>
              <a className="header-menu-tab" href="#5"><span className="icon fontawesome-star-empty scnd-font-color"></span>Favoris</a>
            </li>
            <li>
              <a className="header-menu-tab" href="#5"><span className="icon fontawesome-shopping-cart scnd-font-color"></span>Panier</a>
            </li>
            <li>
              <a className="header-menu-tab" href="#1"><span className="icon entypo-cog scnd-font-color"></span>Paramètres</a>
            </li>
          </ul>
        </header>

      </div>
    )
  }
}

export default HeaderMenu;
