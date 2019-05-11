import React from 'react';
import './Button.css';

const ActionButton = props => {
  return (
    <div className={`btn action-button ${props.buttonStyle}`}>{props.type}</div>
  );
};

export default ActionButton;