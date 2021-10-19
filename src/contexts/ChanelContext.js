import React from "react";

export const ChanelContext = React.createContext();

class ChanelContextProvider extends React.Component {
  state = {
    chanels: [
        {
          "id": 1,
          "name": "TRT 1",
          "rating": 84500,
          "overview": 25122 ,
          "imageURL": "https://trtkurumsal.trt.net.tr/Uploads/image/png/2021-02-03-17.55.58/7dea9fa085b6422cb263c3148cb247b7_w_118.png"
        },
        {
          "id": 2,
          "name": "TRT 2",
          "rating": 36512,
          "overview": 12111,
          "imageURL": "https://trtkurumsal.trt.net.tr/Uploads/image/png/2019-03-20-11.12.39/d052cece8a9049348c49812c1141e586_w_118.png"
        },
        {
          "id": 3,
          "name": "TRT WORLD",
          "rating": 50000,
          "overview": 10000,
          "imageURL": "https://trtkurumsal.trt.net.tr/Uploads/image/png/2019-03-20-11.14.57/afb285c992c744fe83f01388e262b839_w_118.png"
        },
        {
          "id": 4,
          "name": "TRT HABER",
          "rating": 80000,
          "overview": 17000,
          "imageURL": "https://trtkurumsal.trt.net.tr/Uploads/image/png/2020-10-13-20.48.21/22a73f58e06e4979827002c9463e196d_w_118.png"
        },
        {
          "id": 5,
          "name": "TRT SPOR",
          "rating": 98500,
          "overview": 36550,
          "imageURL": "https://trtkurumsal.trt.net.tr/Uploads/image/png/2019-03-20-11.23.47/26a2ed090ada4b9fba97b3fcab3551d7_w_118.png"
        },
        {
          "id": 6,
          "name": "TRT SPOR YILDIZ",
          "rating": 36512,
          "overview": 12111,
          "imageURL": "https://trtkurumsal.trt.net.tr/Uploads/image/png/2021-05-19-16.06.31/58f9cdd55a694f5ba0acb1c1110dc4b1_w_118.png"
        },
        {
          "id": 7,
          "name": "TRT AVAZ",
          "rating": 36512,
          "overview": 12111,
          "imageURL": "https://trtkurumsal.trt.net.tr/Uploads/image/png/2019-03-20-11.18.03/0285e2cef9cc4c6ab30d98932257ec99_w_118.png"
        },
        {
          "id": 8,
          "name": "TRT ÇOCUK",
          "rating": 36512,
          "overview": 12111,
          "imageURL": "https://trtkurumsal.trt.net.tr/Uploads/image/png/2019-03-20-11.18.36/22fa8c432fe245a796cff18a36745381_w_118.png"
        },
        {
          "id": 9,
          "name": "TRT BELGESEL",
          "rating": 36512,
          "overview": 12111,
          "imageURL": "https://trtkurumsal.trt.net.tr/Uploads/image/png/2019-03-20-11.19.01/69a03b09fca64ae0b1503a05729cdf22_w_118.png"
        },
        {
          "id": 10,
          "name": "TRT MÜZİK",
          "rating": 36512,
          "overview": 12111,
          "imageURL": "https://trtkurumsal.trt.net.tr/Uploads/image/png/2021-08-25-09.58.58/129fd7b2ea9b4016be296e9706901bc3_w_118.png"
        },
        {
          "id": 11,
          "name": "TRT TÜRK",
          "rating": 36512,
          "overview": 12111,
          "imageURL": "https://trtkurumsal.trt.net.tr/Uploads/image/png/2021-08-27-12.29.27/ac871e01cadf481a99d9353e52459ebc_w_118.png"
        },
        {
          "id": 12,
          "name": "TRT EBA İLKOLUK",
          "rating": 36512,
          "overview": 12111,
          "imageURL": "https://www.trt.net.tr/img/logolar/TRT-eba-ilkokul-logo-h33.png"
        },
        {
          "id": 13,
          "name": "TRT ORTAOKUL",
          "rating": 36512,
          "overview": 12111,
          "imageURL": "https://www.trt.net.tr/img/logolar/TRT-eba-ortaokul-logo-h33.png"
        },
        {
          "id": 14,
          "name": "TRT LİSE",
          "rating": 36512,
          "overview": 12111,
          "imageURL": "https://www.trt.net.tr/img/logolar/TRT-eba-lise-logo-h33.png"
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