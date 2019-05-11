import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

let result = 0;

const App = () => {
  return (
    <div>
      <h3>Welcome to React Calculator</h3>
      <p>
        We have given you a starter project. You'll want to build out your
        components in their respective files, remove this code and replace it
        with the proper components.
      </p>
      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p>
      <div className="container">
        <CalculatorDisplay result={result} />
        <div className="keyboard">
          <div className="number-container">
            <ActionButton type="clear" buttonStyle="large-button" />
            <NumberButton number="7" />
            <NumberButton number="8" />
            <NumberButton number="9" />
            <NumberButton number="4" />
            <NumberButton number="5" />
            <NumberButton number="6" />
            <NumberButton number="1" />
            <NumberButton number="2" />
            <NumberButton number="3" />
            <NumberButton number="0" buttonStyle="large-button" />
          </div>
          <div className="operator-container">
            <ActionButton type="&#xf7;" />
            <ActionButton type="&#xd7;" />
            <ActionButton type="&#x2212;" />
            <ActionButton type="&#x2b;" />
            <ActionButton type="&#x3d;" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
