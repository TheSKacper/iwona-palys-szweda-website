import React from "react";
import './workshop.css'
import img1 from "../../assets/workshop/2006 4a.JPG";
import img2 from "../../assets/workshop/2018 11a.jpeg";
import img3 from "../../assets/workshop/2018 12d.jpeg";
import img4 from "../../assets/workshop/2018 5a.jpeg";
import img5 from "../../assets/workshop/2019 3a.jpg";
import img6 from "../../assets/workshop/2020 4b.jpg";
import img7 from "../../assets/workshop/2020 6a.jpeg";
import img8 from "../../assets/workshop/2023 4.jpeg";
import img9 from "../../assets/workshop/20230328_225759.jpg";

const WorkShop = () => {
  return (
    <div className="mainBoxWk">
      <div className="smallBoxWk">
        <div></div>
        <h1 className="h1Wk">Prace nad wykonaniem</h1>
        <div className="grid-containerWk">
          <div className="grid-itemWk">
            <img className="imgWk" src={img1} alt="" />
          </div>
          <div className="grid-itemWk">
            <img className="imgWk" src={img2} alt="" />
          </div>
          <div className="grid-itemWk">
            <img className="imgWk" src={img3} alt="" />
          </div>
          <div className="grid-itemWk">
            <img className="imgWk" src={img4} alt="" />
          </div>
          <div className="grid-itemWk">
            <img className="imgWk" src={img5} alt="" />
          </div>
          <div className="grid-itemWk">
            <img className="imgWk" src={img6} alt="" />
          </div>
          <div className="grid-itemWk">
            <img className="imgWk" src={img7} alt="" />
          </div>
          <div className="grid-itemWk">
            <img className="imgWk" src={img8} alt="" />
          </div>
          <div className="grid-itemWk">
            <img className="imgWk" src={img9} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkShop;
