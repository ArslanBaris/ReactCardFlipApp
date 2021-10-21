import React from "react";
import { Line } from "react-chartjs-2";

// Styles
import "./Card.css";



const CardBack = ({ chanel }) => {

  return (    
     <div>
         <Line data={{
              labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
              datasets: [{
            label: 'Chanel Rating',
            data: [12, 19, 3, 5, 8, 20],
            fill:false,
            borderColor: 'rgb(75, 192, 192)',
    
             }]
         }}
         
         height= {"300px" }
         width= {"200px"}
         options={{maintainAspectRatio: false}}
         />
         

     </div>
  );
};

export default CardBack;
