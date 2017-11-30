import React, { Component } from 'react';

export default class CityName extends Component {
  render() {
    return (
      <div className="current-city">
        <h3>{this.props.cityName}</h3>
        <hr/>
      </div>
    );
  }
}
import './indexx.less'