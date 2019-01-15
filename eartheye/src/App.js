import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// import { observer } from "mobx-react";

// Components

import LandingPage from "./LandingPage";
import Measure from "./Measure";
import Compare from "./Compare";

// Store

class App extends Component {
  getView() {
    return (
      <Switch>
        <Redirect exact from="/" to="/earth-eye" />
        <Route path="/home" component={LandingPage} />
        <Route path="/compare" component={Compare} />
        <Route path="/measure" component={Measure} />
      </Switch>
    );
  }
  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="content col-10">{this.getView()}</div>
        </div>
      </div>
    );
  }
}

export default App;