import React, { Component } from 'react';
import Spinner1 from './spinner1';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="title">CSS Loader</div>
        <Spinner1 />
        <div className="cardContainer">
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </div>
    );
  }
}
