import React from "react";

// Styles
import "./Footer.css";

const Footer = () => {
  return (
    <div className="myBaseFooter">
     
        <div className="myFooter">
          <h2 className="circleGreen" ></h2>
          <h2 className=" text2"  style={{ color: 'green'}}>Anlık İzleyici</h2>
          <h2 style={{ color: 'white' , fontSize:"1.3rem"}}>/</h2>
          <h2 className="circleOrange  "></h2>
          <h2 className=" text2" style={{ color: 'orange'}}> Tahmini Total Reyting</h2>
          <h2 style={{ color: 'white', fontSize:"1.3rem" }}>/</h2>
          <h2 className="circleYellow  " ></h2>
          <h2 className=" text2" style={{ color: 'yellow'}} > Tahmini İzleyici</h2>
        </div>
      
    </div>
  );
};

export default Footer;
