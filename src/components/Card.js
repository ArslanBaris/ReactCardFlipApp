import React from "react";
import { useContext, useState, useEffect } from "react";

import CardFront from "./CardFront";
import CardBack from "./CardBack"; 
// Styles
import "./Card.css";

// Contexts
import { ChanelContext } from "../contexts/ChanelContext";
import { ThemeContext } from "../contexts/ThemeContext";

const Card = ({ chanel }) => {
  const { dark } = useContext(ThemeContext);
  const theme = dark;
  return (
    <div className="card-container col-lg-4 col-sm-6 mb-5">
      <div className="card text-white bg-dark mb-3"> 
        <figure className="front">
          <CardFront chanel={chanel} />
        </figure>
        <figure className="back">
        <CardBack chanel={chanel} />
        </figure>
      </div>
    </div>
  );
};

export default Card;

// <div className="card-container col-lg-4 col-sm-6 mb-5">
//     <div className="card text-white bg-dark mb-3" >
//       <div className="portfolio-item">

//         <img className="card-img"  src={chanel.imageURL} alt="" />

//         <div className="portfolio-caption">
//           <div className="portfolio-caption-heading ">
//             {chanel.name}
//           </div>
//           <div className="portfolio-caption-subheading text-muted">
//             {chanel.x}
//           </div>
//           <div className="portfolio-caption-subheading text-muted">
//             {chanel.y}
//           </div>
//           <div >

//           </div>
//           </div>
//         </div>
//       </div>
//     </div>
