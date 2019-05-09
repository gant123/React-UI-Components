import React from 'react';
import './Header.css';
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent"
import ImageThumbnail from "./ImageThumbnail";


const HeaderContainer = () => (
  <div className="header-container">
    <ImageThumbnail />
    <div className="header-text">
      <HeaderTitle />
      <HeaderContent />
    </div>
  </div>
);
export default HeaderContainer;
