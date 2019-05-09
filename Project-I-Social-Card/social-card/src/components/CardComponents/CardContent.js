import React from 'react';
import './Card.css';

const CardContent = () => {
  return (
    <div className="testing" href="reactjs.org"> 
      <h4>Get started with React</h4>
      <p>React makes it painless to create interactive UIs. Design simple wiews for each state in your application.</p>
      <p className="gray">reactjs.org</p>
    </div>
  );
};

export default CardContent;