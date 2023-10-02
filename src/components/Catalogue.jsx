import { useEffect, useState } from "react";
import DogPreview from "./DogPreview";
import "./Catalogue.css";
import { Link } from "react-router-dom";
import Header from "./Header";

const dogApiUrl = "https://api.jsonbin.io/v3/b/650a7ebece39bb6dce7f5683";

const Catalogue = (props) => {
  const [dogList, setDogList] = useState([]);
  const [searchInput, setSearchInput] = useState("")
  const [selectedDog, setSelectedDog] = useState(null);
  const [dogCardVisible, setDogCardVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedDogList = await getDogList();
        setDogList(fetchedDogList);
        console.log(fetchedDogList.filter(dog => dog.name === "Molly"))
      } catch (error) {
        console.error("Error fetching dog list:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    try {
      const filteredDogs = dogList.filter((dog) =>
        dog.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setDogList(filteredDogs);
    } catch (error) {
      console.error('Error searching dogs:', error);
    }
  };

  const handleDogPreviewClick = (dog) => {
    console.log("Clicking on preview", dog);
    setSelectedDog(dog);
    setDogCardVisible(true);
  };


  return (
    <div className="catalogue-container">
      <Header 
        searchInput={searchInput}
        onSearchInputChange={setSearchInput}
        onSearch={handleSearch}
      />
      <div className="dog-grid">
        {dogList.map((dog, index) => (
          <DogPreview
            key={index}
            img={dog.img}
            name={dog.name}
            sex={dog.sex}
            breed={dog.breed}
            present={dog.present}
            age={dog.age}
            owner={dog.owner}
            chipNumber={dog.chipNumber}
            onClick={() => handleDogPreviewClick(dog)}
          />
        ))}
      </div>

    </div>
  );
};

const getDogList = async () => {
  const response = await fetch(dogApiUrl);
  const data = await response.json();

  console.log("Current catalogue: " + data.record.length);

  // const mollyDogs = data.record.filter(dog => dog.name === "Molly");
  // console.log("Dogs named Molly:", mollyDogs);

  return data.record;
};

export default Catalogue;
