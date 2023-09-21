import { useEffect } from "react";

const dogApiUrl = "https://api.jsonbin.io/v3/b/650a7ebece39bb6dce7f5683";

const Catalogue = (props) => {

  useEffect(() => {
    getDogList();
  }, []);

  return (
    <div>
      <h1>Catalogue</h1>
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
