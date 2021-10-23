import React from "react";
import { createContext, useState } from 'react';

export const ChanelContext = createContext();

const ChanelContextProvider = (props) => {
  
  const [chanels, setChanels] = useState([
    {
      "id": 1,
      "name": "TRT 1",
      "instantViewer": 3840500,
      "estimateRating": 2500000 ,
      "estimateViewer": 3750000,
      "imageURL": "https://cdn-i.pr.trt.com.tr/trttv/w256/h144/q80/11064246.png",
      "data": [500200,350900,130000,59000,80000,200000 ]
    },
    {
      "id": 2,
      "name": "TRT 2",
      "instantViewer": 3006512,
      "estimateRating": 1002111,
      "estimateViewer": 2500000,
      "imageURL": "https://cdn-i.pr.trt.com.tr/trttv/w256/h144/q80/7900419.png",
      "data": [80200,19050,30500,17000,8000,2000 ]
    },
    {
      "id": 3,
      "name": "TRT WORLD",
      "instantViewer": 500500,
      "estimateRating": 100050,
      "estimateViewer": 250500,
      "imageURL": "https://cdn-i.pr.trt.com.tr/trttv/w256/h144/q80/7900434.png",
      "data": [120000,1900,3000,5000,8000,20000 ]
    },
    {
      "id": 4,
      "name": "TRT HABER",
      "instantViewer": 800040,
      "estimateRating": 170080,
      "estimateViewer": 250020,
      "imageURL": "https://trtkurumsal.trt.net.tr/Uploads/image/png/2020-10-13-20.48.21/22a73f58e06e4979827002c9463e196d_w_118.png",
      "data": [350000,81900,390000,95000,80000,20000 ],
      "marginTop":"20%",
      "height":"40%"
    },
    {
      "id": 5,
      "name": "TRT SPOR",
      "instantViewer": 988500,
      "estimateRating": 367550,
      "estimateViewer": 275000,
      "imageURL": "https://cdn-i.pr.trt.com.tr/trttv/w256/h144/q80/7900408.png",
      "data": [11200,101900,130000,50500,8000,520000 ]
    },
    {
      "id": 6,
      "name": "TRT SPOR YILDIZ",
      "instantViewer": 396512,
      "estimateRating": 192111,
      "estimateViewer": 275000,
      "imageURL": "https://cdn-i.pr.trt.com.tr/trttv/w256/h144/q80/11342765.png",
      "data": [1200,1900,3000,5000,8000,20000 ]
    },
    {
      "id": 7,
      "name": "TRT AVAZ",
      "instantViewer": 936512,
      "estimateRating": 412111,
      "estimateViewer": 825000,
      "imageURL": "https://cdn-i.pr.trt.com.tr/trttv/w256/h144/q80/7900367.png",
      "data": [1200,1900,3000,5000,8000,20000 ]
    },
    {
      "id": 8,
      "name": "TRT ÇOCUK",
      "instantViewer": 136512,
      "estimateRating": 112111,
      "estimateViewer": 215000,
      "imageURL": "https://cdn-i.pr.trt.com.tr/trttv/w256/h144/q80/7900396.png",
      "data": [4200,2900,3000,1000,75000,2000 ]
    },
    {
      "id": 9,
      "name": "TRT BELGESEL",
      "instantViewer": 365000,
      "estimateRating": 120000,
      "estimateViewer": 200000,
      "imageURL": "https://cdn-i.pr.trt.com.tr/trttv/w256/h144/q80/7900403.png",
      "data": [8500,12000,25000,40000,18000,50000 ]
    },
    {
      "id": 10,
      "name": "TRT MÜZİK",
      "instantViewer": 98512,
      "estimateRating": 82111,
      "estimateViewer": 105000,
      "imageURL": "https://cdn-i.pr.trt.com.tr/trttv/w256/h144/q80/12382044.png",
      "data": [7000,19000,3000,5000,23000,40000 ]
    },
    {
      "id": 11,
      "name": "TRT TÜRK",
      "instantViewer": 56000,
      "estimateRating": 68000,
      "estimateViewer": 45000,
      "imageURL": "https://cdn-i.pr.trt.com.tr/trttv/w256/h144/q80/12037070.png",
      "data": [17000,19000,30000,50000,38000,20000 ]
    },
    {
      "id": 12,
      "name": "TRT EBA İLKOLUK",
      "instantViewer": 46512,
      "estimateRating": 15111,
      "estimateViewer": 35000,
      "imageURL": "https://cdn-i.pr.trt.com.tr/trttv/w256/h144/q80/8014035.png",
      "data": [12000,900,35000,15000,8000,1500 ]
    },
    {
      "id": 13,
      "name": "TRT ORTAOKUL",
      "instantViewer": 25512,
      "estimateRating": 22111,
      "estimateViewer": 15000,
      "imageURL": "https://cdn-i.pr.trt.com.tr/trttv/w256/h144/q80/8014037.png",
      "data": [2000,1500,4000,7000,11000,5000 ]
    },
    {
      "id": 14,
      "name": "TRT LİSE",
      "instantViewer": 36512,
      "estimateRating": 12111,
      "estimateViewer": 25000,
      "imageURL": "https://cdn-i.pr.trt.com.tr/trttv/w256/h144/q80/8014050.png",
      "data": [1200,1900,3000,5000,8000,20000 ]      
    },
    {
      "id": 4,
      "name": "TRT Arabi",
      "instantViewer": 800040,
      "estimateRating": 170080,
      "estimateViewer": 250020,
      "imageURL": "https://trtkurumsal.trt.net.tr/Uploads/image/png/2019-03-20-11.20.11/24b0f037378945888f2463b6262418f0_w_118.png",
      "data": [350000,81900,390000,95000,80000,20000 ],
      "marginTop":"20%",
      "height":"40%"
    },
    {
      "id": 4,
      "name": "TRT Kurdî",
      "instantViewer": 800040,
      "estimateRating": 170080,
      "estimateViewer": 250020,
      "imageURL": "https://trtkurumsal.trt.net.tr/Uploads/image/png/2019-03-20-11.21.19/890ab780012848a99eda0bda8c1c605d_w_118.png",
      "data": [350000,81900,390000,95000,80000,20000 ],
      "marginTop":"20%",
      "height":"40%"
    },    
  
    ])

    return (
      <ChanelContext.Provider value={{chanels}}>
        {props.children}
      </ChanelContext.Provider>
    );
  
}

export default ChanelContextProvider;