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
      style={{ background: theme.bg, color: theme.txt }}
    >
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Chanels</h2>
          <h3 className="section-subheading text-muted">
            Chanels ratings
          </h3>          
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
