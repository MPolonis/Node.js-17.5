import React, { Component } from 'react';
import { Display } from "./Display";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      city: "Wrocław"
    }
  }

  changeCity = () => {
    debugger;
    this.setState({ city: this.state.city === "Wrocław" ? "Gdańsk" : "Wrocław" })
  }

  render() {
    return (
      <Display value={this.state.city} callback={this.changeCity} />
    );
  }
}
