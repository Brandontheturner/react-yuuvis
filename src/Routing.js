import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../src/Components/Home";
import Upload from "../src/Components/Upload";
import LandingPage from "../src/Components/Models/LandingPage";

export class Routing extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/upload' component={Upload} />
            <Route exact path='/search/:query' component={LandingPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Routing;
