import React from "react";
import { Line } from "react-chartjs-2";

// Styles
import "./Card.css";



const CardBack = ({ chanel }) => {

  var date = new Date()
  var year = date.getFullYear()
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  var currentMonth = date.getMonth();

  const getDaysInMonth = () => {    
    var labels = []
   for(let i=6;i>0;i--) {
      labels.push(months[date.getMonth()-i]);     
    }
    
    console.log(labels)
    return labels;  
}

  return (    
     <div>
         <Line data={{
              labels: getDaysInMonth(),
              datasets: [{
            label: 'Chanel Rating',
            data: chanel.data,
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
