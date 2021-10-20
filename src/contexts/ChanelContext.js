import React from "react";

export const ChanelContext = React.createContext();

class ChanelContextProvider extends React.Component {
  state = {
    chanels: [
        {
          "id": 1,
          "name": "TRT 1",
          "x": 84500,
          "y": 25122 ,
          "imageURL": "https://cdn-i.pr.trt.com.tr/trttv/w256/h144/q80/11064246.png"
        },
        {
          "id": 2,
          "name": "TRT 2",
          "x": 36512,
          "y": 12111,
          "imageURL": "https://cdn-i.pr.trt.com.tr/trttv/w256/h144/q80/7900419.png"
        },
        {
          "id": 3,
          "name": "TRT WORLD",
          "x": 50000,
          "y": 10000,
          "imageURL": "https://cdn-i.pr.trt.com.tr/trttv/w256/h144/q80/7900434.png"
        },
        // {
        //   "id": 4,
        //   "name": "TRT HABER",
        //   "x": 80000,
        //   "y": 17000,
        //   "imageURL": "https://trtkurumsal.trt.net.tr/Uploads/image/png/2020-10-13-20.48.21/22a73f58e06e4979827002c9463e196d_w_118.png"
        // },
        {
          "id": 5,
          "name": "TRT SPOR",
          "x": 98500,
          "y": 36550,
          "imageURL": "https://cdn-i.pr.trt.com.tr/trttv/w256/h144/q80/7900408.png"
        },
        {
          "id": 6,
          "name": "TRT SPOR YILDIZ",
          "x": 36512,
          "y": 12111,
          "imageURL": "https://cdn-i.pr.trt.com.tr/trttv/w256/h144/q80/11342765.png"
        },
        {
          "id": 7,
          "name": "TRT AVAZ",
          "x": 36512,
          "y": 12111,
          "imageURL": "https://cdn-i.pr.trt.com.tr/trttv/w256/h144/q80/7900367.png"
        },
        {
          "id": 8,
          "name": "TRT ÇOCUK",
          "x": 36512,
          "y": 12111,
          "imageURL": "https://cdn-i.pr.trt.com.tr/trttv/w256/h144/q80/7900396.png"
        },
        {
          "id": 9,
          "name": "TRT BELGESEL",
          "x": 36512,
          "y": 12111,
          "imageURL": "https://cdn-i.pr.trt.com.tr/trttv/w256/h144/q80/7900403.png"
        },
        {
          "id": 10,
          "name": "TRT MÜZİK",
          "x": 36512,
          "y": 12111,
          "imageURL": "https://cdn-i.pr.trt.com.tr/trttv/w256/h144/q80/12382044.png"
        },
        {
          "id": 11,
          "name": "TRT TÜRK",
          "x": 36512,
          "y": 12111,
          "imageURL": "https://cdn-i.pr.trt.com.tr/trttv/w256/h144/q80/12037070.png"
        },
        {
          "id": 12,
          "name": "TRT EBA İLKOLUK",
          "x": 36512,
          "y": 12111,
          "imageURL": "https://cdn-i.pr.trt.com.tr/trttv/w256/h144/q80/8014035.png"
        },
        {
          "id": 13,
          "name": "TRT ORTAOKUL",
          "x": 36512,
          "y": 12111,
          "imageURL": "https://cdn-i.pr.trt.com.tr/trttv/w256/h144/q80/8014037.png"
        },
        {
          "id": 14,
          "name": "TRT LİSE",
          "x": 36512,
          "y": 12111,
          "imageURL": "https://cdn-i.pr.trt.com.tr/trttv/w256/h144/q80/8014050.png"
        }    
      ]   
  };

  render() {
    return (
      <ChanelContext.Provider value={{...this.state}}>
        {this.props.children}
      </ChanelContext.Provider>
    );
  }
}

export default ChanelContextProvider;