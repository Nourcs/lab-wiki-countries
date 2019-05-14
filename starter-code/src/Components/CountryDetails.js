import React, { Component } from "react";
import { Link } from "react-router-dom";

class CountryDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let currentCountry = this.props.countries.filter(item => {
      if (item.name.common === this.props.match.params.id) {
        return item;
      }
    });
    let borders = [];
    currentCountry[0].borders.map(country => {
      this.props.countries.map(item => {
        if (country === item.cca3) {
          borders.push(item.name.common);
        }
      });
    });

    return (
      <div className="m-5">
        <table className="table">
          <tbody>
            <tr>
              <th scope="col" colSpan="2">
                <h1>{currentCountry[0].name.common}</h1>
              </th>
            </tr>
            <tr>
              <th scope="row">Capital</th>
              <td>{currentCountry[0].capital[0]}</td>
            </tr>
            <tr>
              <th scope="row">Area</th>
              <td>{currentCountry[0].area} Km²</td>
            </tr>
            <tr>
              <th scope="row">Borders</th>
              <td>
                {borders.map((country, index) => {
                  return (
                    <li key={index}>
                      <Link to={"/" + country}>{country}</Link>
                    </li>
                  );
                })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CountryDetails;
