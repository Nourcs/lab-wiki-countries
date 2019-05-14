import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./countries.css";
import countries from "../countries.json";

class Countries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    };
  }
  componentDidMount() {
    this.setState({
      countries
    });
  }
  render() {
    return (
      <div className="card vertnav">
        <ul className="list-group list-group-flush">
          {this.state.countries.map((country, index) => {
            return (
              <li className="list-group-item" key={index}>
                <Link to={"/" + country.name.common}>
                  {country.name.official}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Countries;
