import { useEffect, useState } from "react";
import DogPreview from "./DogPreview";

const dogApiUrl = "https://api.jsonbin.io/v3/b/650a7ebece39bb6dce7f5683";

const Catalogue = (props) => {
  const [dogList, setDogList] = useState([]);

  // useEffect(() => {
  //   getDogList();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedDogList = await getDogList();
        setDogList(fetchedDogList);
      } catch (error) {
        console.error("Error fetching dog list:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Catalogue</h1>
      <button onClick={props.nextScreen}>Home</button>
      {dogList.map((dog, index) => (
        <DogPreview key={index} img={dog.img} name={dog.name} />
      ))}
    </div>
  );
};

const getDogList = async () => {
  const response = await fetch(dogApiUrl);
  const data = await response.json();

  console.log("Current catalogue: " + data.record.length);

  return data.record;
};

export default Catalogue;
