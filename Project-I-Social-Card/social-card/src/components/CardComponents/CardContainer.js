import React from 'react';
import './Card.css';
import CardContent from './CardContent';
import CardBanner from './CardBanner';
import Footer from "../FooterComponents/Footer";

const CardContainer = () => {
  return (
    <div>
     <CardBanner />
     <CardContent />
     <Footer />
    </div>
  );
};

export default CardContainer;