import React from 'react';
import './Header.css';


const HeaderTitle = () => {
  return (
   <div className="title-container">
      <h4 className="title">Lambda School</h4>
      <h4 className="handle">@LamdaSchool</h4>
      <h4 className="date">{Date(Date.now())}</h4>
   </div>
  );
};

export default HeaderTitle;