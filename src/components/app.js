import React, { Component } from 'react';
import Spinner1 from './spinner1';
import Spinner2 from './spinner2';
import Spinner3 from './spinner3';
import Spinner4 from './spinner4';
import Spinner5 from './spinner5';
import Spinner6 from './spinner6';
import Wavelet from './wavelet';
import RotatePlan from './rotatePlan';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="title">CSS Loader</div>
        <Spinner1 />
        <Spinner2 />
        <Spinner3 />
        <Spinner4 />
        <Spinner5 />
        <Spinner6 />
        <Wavelet />
        <RotatePlan />
        <div className="cardContainer">
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </div>
    );
  }
}
