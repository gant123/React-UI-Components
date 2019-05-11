import React from 'react';
import './Button.css';


const NumberButton = props => {
  return (
    <div className={`btn number-button ${props.buttonStyle}`}>
    <a href="#">{props.number}</a>
  </div>
  );
};

export default NumberButton;