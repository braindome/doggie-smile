import { useEffect, useState } from "react";
import DogPreview from "./DogPreview";
import DogCard from "./DogCard";
import "./Catalogue.css";

const dogApiUrl = "https://api.jsonbin.io/v3/b/650a7ebece39bb6dce7f5683";

const Catalogue = (props) => {
  const [dogList, setDogList] = useState([]);
  const [selectedDog, setSelectedDog] = useState(null);
  const [dogCardVisible, setDogCardVisible] = useState(false);

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

  const handleDogPreviewClick = (dog) => {
    console.log("Clicking on preview", dog);
    setSelectedDog(dog);
    setDogCardVisible(true);
  };

  const closeDogCard = () => {
    setDogCardVisible(false);
  };

  return (
    <div className="catalogue-container">
      <h1>Catalogue</h1>
      <div className="dog-grid">
        {dogList.map((dog, index) => (
          <DogPreview
            key={index}
            img={dog.img}
            name={dog.name}
            onClick={() => handleDogPreviewClick(dog)}
          />
        ))}
      </div>

      {dogCardVisible && (
        <DogCard
          name={selectedDog.name}
          sex={selectedDog.sex}
          breed={selectedDog.breed}
          img={selectedDog.img}
          present={selectedDog.present}
          age={selectedDog.age}
          onClose={closeDogCard}
        />
      )}
      
      <button onClick={props.nextScreen}>Home</button>

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
