import React, { useState } from "react";
import "./DogPreview.css";
import "./DogCard";
import DogCard from "./DogCard";

const DogPreview = (props) => {

  const [expanded, setExpanded] = useState(false);
  const [imgSrc, setImgSrc] = useState(props.img);
  let btnName = expanded ? "LESS" : "MORE"

  const handleImageError = () => {
    setImgSrc('./public/placeholder.svg');
  }

  return (
    <div className="dog-preview" onClick={props.onClick}>
      <img src={imgSrc} onError={handleImageError}  alt="" className="dog-img" />
      <h3>{props.name} </h3>
      <span className="info" onClick={() => setExpanded(!expanded)} >
        <b>{btnName}</b>
      </span>
      { expanded ? (
        <section className="card">
          <img src={imgSrc} onError={handleImageError} alt="" />
          <section className="data">
            <h3>Sex: {props.sex}</h3>
            <h3>Breed: {props.breed}</h3>
            <h3>Is present? {props.present.toString()} </h3>
            <h3>Owner: {props.owner.name} {props.owner.lastName}</h3>
            <h3>Phone: {props.owner.phoneNumber} </h3>
          </section>



        </section>

      ) : null}
    </div>
  );
};

export default DogPreview;
