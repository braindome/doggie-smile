import React, { useState } from "react";
import "./DogPreview.css";
import "./DogCard";
import DogCard from "./DogCard";

const DogPreview = (props) => {

  const [expanded, setExpanded] = useState(false);
  let btnName = expanded ? "LESS" : "MORE"

  return (
    <div className="dog-preview" onClick={props.onClick}>
      <img src={props.img} alt="" className="dog-img" />
      <h3>{props.name} </h3>
      <span className="info" onClick={() => setExpanded(!expanded)} >
        <b>{btnName}</b>
      </span>
      { expanded ? (
        <section>
          <img src={props.img} alt="" />
          <h3>Sex: {props.sex}</h3>
          <h3>Breed: {props.breed}</h3>

          <h3>Is present? {props.present.toString()} </h3>
          <h3>Owner: {props.owner.name} {props.owner.lastName}</h3>
          <h3>Phone: {props.owner.phoneNumber} </h3>

        </section>

      ) : null}
    </div>
  );
};

export default DogPreview;