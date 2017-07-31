import React, { Component } from 'react';
import { connect } from "react-redux";
import { pingAction } from "../actions/pingAction";


class App extends Component {
  oneClick() {
    console.log(this);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>is pinging: {this.isPinging}</h1>
        <button onClick={this.oneClick}>Click PING</button>
      </div>
    );
  }
}

export default App;
