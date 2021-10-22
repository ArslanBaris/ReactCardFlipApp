import React from "react";
import { useContext, useState, useEffect } from "react";

// Styles
import './CardList.css'

// Components
import Card from "./Card";

// Contexts
import { ChanelContext } from "../contexts/ChanelContext";
import { ThemeContext } from "../contexts/ThemeContext";

const CardList = () => {
  const { chanels } = useContext(ChanelContext);
  const { dark } = useContext(ThemeContext);
  const theme = dark;
  return (
    <section
      className="page-section"
      id="portfolio"
      style={{ background: theme.bg, color: theme.txt }}
    >
      <div className="container">
        <div className="text-center">
        <div style ={{margin:"auto"}} className="card-container col-sm-10 mb-5">
      <div className="card text-white bg-dark mb-3"> 
      <img style ={{marginTop:"5%", width:"20%", height:"auto"}} src="http://www.trt.net.tr/img/logolar/TRT_New_Logo.png" alt="" />
      <hr style={{ margin:"alt", width: "70%" }} />
      <div className="portfolio-caption">
        
        <div className="portfolio-caption-subheading text-muted">
          1111
        </div>
        <div className="portfolio-caption-subheading text-muted">
          2222
        </div>
      </div>
      </div>
    </div>      
        </div>
        <div className="row">
          {chanels.map((chanel) => {
            return <Card chanel={chanel} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default CardList;
