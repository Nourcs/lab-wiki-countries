import React, { Component } from "react";
import Countries from "./Countries";
import CountryDetails from "./CountryDetails";
import countries from "../countries.json";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries
    };
  }

  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-dark bg-primary ">
            <span className="navbar-brand mb-0 h1">WikiCountries</span>
          </nav>
          <div className="container">
            <div className="row ">
              <div className="col-4 overflow-auto">
                <Countries />
              </div>
              <div className="col-8">
                <Switch>
                  <Route
                    path="/:id"
                    render={props => (
                      <CountryDetails
                        {...props}
                        countries={this.state.countries}
                      />
                    )}
                  />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
