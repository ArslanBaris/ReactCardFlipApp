import React from "react";
import { useContext, useState, useEffect } from "react";

// Styles
import "./Card.css";


const CardFront = ({ chanel }) => {
  return (
    <div>
      <div style={{height:"140px"}}>
        <img  style={{height:chanel.height, marginTop:chanel.marginTop}}  src={chanel.imageURL} alt="" />
        
      </div>
      <div style={{height:"30px"}}>
          <hr  style={{width:"70%",margin:"auto"}}/>
      </div>
      
      <div  style={{height:"60%"}}>
        <div className="portfolio-caption">
          <div className="portfolio-caption-heading ">{chanel.name}</div>
          <div className="portfolio-caption-subheading " style={{color:"green",fontWeight:"bolder"}}>
            {chanel.instantViewer}
          </div>
          <div className="portfolio-caption-subheading" style={{color:"orange",fontWeight:"bolder"}}>
            {chanel.estimateRating}
          </div>
          <div className="portfolio-caption-subheading"  style={{color:"yellow",fontWeight:"bolder"}} >
            {chanel.estimateViewer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFront;
