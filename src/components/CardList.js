import React from "react";
import { useContext, useState, useEffect } from "react";

// Styles
import "./CardList.css";

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
          <div
            style={{ margin: "auto" }}
            className="card-container col-sm-10 mb-5"
          >
            <div className="bg-dark" style={{height:"330px",borderRadius:"25px"}}>
              <img
                style={{ marginTop: "5%", width: "20%"}}
                src="https://cdn-s.pr.trt.com.tr/trtizle/images/logo.svg"
                alt=""
              />
              <hr style={{width:"60%",margin:"auto",background:"white",marginTop:"4%"}}/>
              <div className="portfolio-caption" style={{marginTop:"2%"}} >             
                <div className="portfolio-caption-subheading"  style={{color:"green",fontWeight:"bolder"}}>
                  Anlık İzleyici: 1505000
                </div>
                <div className="portfolio-caption-subheading" style={{color:"orange",fontWeight:"bolder"}} >
                  Tahmini Total Reyting : 2950800
                </div>
                <div className="portfolio-caption-subheading" style={{color:"yellow",fontWeight:"bolder"}} >
                  Tahmini İzleyici : 2500000
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
