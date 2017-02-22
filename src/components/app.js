import React, { Component } from 'react';
import Spinner1 from './spinner1';
import Spinner2 from './spinner2';
import Spinner3 from './spinner3';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="title">CSS Loader</div>
        <Spinner1 />
        <Spinner2 />
        <Spinner3 />
        <div className="cardContainer">
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </div>
    );
  }
}
