const DogPreview = (props) => {
  return (
    <div>
      <img src={props.img} alt="" />
      <h3>{props.name} </h3>
    </div>
  );
};

export default DogPreview;
