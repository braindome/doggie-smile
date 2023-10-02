import React, { useState } from "react";
import "./DogPreview.css";
import "./DogCard";
import placeholder from "../assets/placeholder.svg" 
import DogCard from "./DogCard";

const DogPreview = (props) => {

  const [expanded, setExpanded] = useState(false);
  // const [imgSrc, setImgSrc] = useState(props.img);
  let btnName = expanded ? "LESS" : "MORE"

  // const handleImageError = () => {
  //   // setImgSrc('../public/placeholder.svg');
  //   setImgSrc(placeholder)
  // }

  const handleImageError = (e) => {
    e.target.src = placeholder;
  }

  const setIsPresentSymbols = () => {

    return props.present ? (
      <span style={{ color: "green" }}>●</span>
    ) : (
      <span style={{ color: "red" }}>●</span>
    )


  }

  return (
    <div className="dog-preview" onClick={props.onClick}>
      <img src={props.img} onError={handleImageError}  alt="" className="dog-img" />
      <h3>{props.name} </h3>
      <span className="info" onClick={() => setExpanded(!expanded)} >
        <b>{btnName}</b>
      </span>
      { expanded ? (
        <section className="dog-card">
          <img src={props.img} onError={handleImageError} alt="" className="big-img" />
          <section className="data">
            <h3>Sex: {props.sex}</h3>
            <h3>Breed: {props.breed}</h3>
            <h3>Status: {setIsPresentSymbols()} </h3>
            <h3>Owner: {props.owner.name} {props.owner.lastName}</h3>
            <h3>Phone: {props.owner.phoneNumber} </h3>
            <h3>Chip Number: {props.chipNumber} </h3>
          </section>
        </section>

      ) : null}
    </div>
  );
};

export default DogPreview;
