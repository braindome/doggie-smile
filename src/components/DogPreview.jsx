import React from "react";
import "./DogPreview.css"

const DogPreview = (props) => {
  return (
    <div className="dog-preview">
      <img src={props.img} alt="" className="dog-img" />
      <h3>{props.name} </h3>
    </div>
  );
};

export default DogPreview;
