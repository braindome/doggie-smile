const DogCard = (props) => {
  return (
    <section>
      <h2>{props.name}</h2>
      <h3>{props.sex}</h3>
      <h3>{props.breed}</h3>
      <img src={props.img} alt="" />
      <h3>{props.present} </h3>
      <h3>{props.age} </h3>
    </section>
  );
};

export default DogCard;
