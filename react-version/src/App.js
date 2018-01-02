import React, { Component } from "react";
import { SimpleRouter, Sidebar, Header } from "./core";

import "./App.css";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hash: window.location.hash.substr(1)
    }

    window.addEventListener('hashchange', this.pathChanged.bind(this));
  }

  pathChanged() {
    this.setState({
      hash: window.location.hash.substr(1)
    })
  }

  render() {
    const { hash } = this.state;


    return (
      <div className="App">
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Sidebar path={hash}/>
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
              <SimpleRouter path={hash} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
