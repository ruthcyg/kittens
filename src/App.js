import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//function App() {
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        { name: "Dracula" },
        { name: "Zombie" },
        { name: "Frankenstein" },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p> {this.state.string}</p>
          <button onClick={() => this.setState({ string: "Hello Husband" })}>
            change text{" "}
          </button>
        </header>
      </div>
    );
  }
}
export default App;
