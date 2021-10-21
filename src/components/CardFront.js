import React from "react";
import { useContext, useState, useEffect } from "react";

// Styles
import "./Card.css";

// Contexts
import { ChanelContext } from "../contexts/ChanelContext";
import { ThemeContext } from "../contexts/ThemeContext";

const CardFront = ({ chanel }) => {
  const { dark } = useContext(ThemeContext);
  const theme = dark;
  return (    
      <div>       
        <img className="card-img"  src={chanel.imageURL} alt="" />

        <div className="portfolio-caption">
          <div className="portfolio-caption-heading " >
            {chanel.name}
          </div>
          <div className="portfolio-caption-subheading text-muted" >
            {chanel.x}
          </div>
          <div className="portfolio-caption-subheading text-muted" >
            {chanel.y}
          </div>       
          </div>
</div> 
  );
};

export default CardFront;
