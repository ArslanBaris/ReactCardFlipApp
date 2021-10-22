import React from "react";

// Styles
import "./Footer.css";

const Footer = () => {
  return (
    <div className="myFooter">
     
        <div className="deneme ">
          <h2 className="circleYellow text2 " ></h2>
          <h2 className=" text2"  >Sarı</h2>
          <h2 style={{ color: 'white' }}>/</h2>
          <h2 className="circleOrange text2 "></h2>
          <h2 className=" text2" > Turuncu</h2>
          <h2 style={{ color: 'white' }}>/</h2>
          <h2 className="circleRed text2 " ></h2>
          <h2 className=" text2" > Kırmızı</h2>
        </div>
      
    </div>
  );
};

export default Footer;
