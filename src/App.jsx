import { useEffect, useState } from "react";
import Welcome from "./components/Welcome";
import Catalogue from "./components/Catalogue";
import "./App.css";

function App() {
  const WELCOME = "welcome",
    CATALOGUE = "catalogue";
  const [currentScreen, setCurrentScreen] = useState(WELCOME);

  let content = null;

  //setCurrentScreen(WELCOME);

  // useEffect(() => {
  //   console.log("set current screen...");
  //   setCurrentScreen(WELCOME);
  // }, []);

  switch (currentScreen) {
    case WELCOME:
      content = <Welcome nextScreen={setCurrentScreen(CATALOGUE)} />;
      break;
    // case CATALOGUE:
    //   content = <Catalogue />;
    //   break;
    default:
      content = <Welcome />;
      break;
  }

  return <div>{content}</div>;
}

export default App;
