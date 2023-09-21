const dogApiUrl = "https://api.jsonbin.io/v3/b/650a7ebece39bb6dce7f5683";

const Catalogue = (props) => {
  return <div>Catalogue Page</div>;
};

const getDogList = async () => {
  const response = await fetch(dogApiUrl);
  const data = await response.json();

  console.log("Current catalogue: " + data.record);

  return data.record;
};

export default Catalogue;
