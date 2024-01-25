import React from "react";
import img1 from "../../assets/composition/20151212_125447.jpg";
import img2 from "../../assets/composition/20170311_091052.jpg";
import img3 from "../../assets/composition/20230327_185431.jpg";
import img4 from "../../assets/composition/20230327_185443.jpg";
import img5 from "../../assets/composition/20230327_185640.jpg";
import img6 from "../../assets/composition/20230327_185726(1).jpg";
import img7 from "../../assets/composition/Razem 1.jpg";
import img8 from "../../assets/composition/Razem 4.jpeg";
import img9 from "../../assets/composition/Razem 4.jpg";

import './composition.css'

const Composition = () => {
  return (
    <div className="mainBoxCom">
      <div className="smallBoxCom">
        <div></div>
        <h1 className="h1Com">Ekspozycja obrazów na ścianach</h1>
        <div className="grid-containerCom">
          <div className="grid-itemCom">
            <img className="imgCom" src={img1} alt="" />
          </div>
          <div className="grid-itemCom">
            <img className="imgCom" src={img2} alt="" />
          </div>
          <div className="grid-itemCom">
            <img className="imgCom" src={img3} alt="" />
          </div>
          <div className="grid-itemCom">
            <img className="imgCom" src={img4} alt="" />
          </div>
          <div className="grid-itemCom">
            <img className="imgCom" src={img5} alt="" />
          </div>
          <div className="grid-itemCom">
            <img className="imgCom" src={img6} alt="" />
          </div>
          <div className="grid-itemCom">
            <img className="imgCom" src={img7} alt="" />
          </div>
          <div className="grid-itemCom">
            <img className="imgCom" src={img8} alt="" />
          </div>
          <div className="grid-itemCom">
            <img className="imgCom" src={img9} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Composition;
