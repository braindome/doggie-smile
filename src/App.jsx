import { useEffect, useState } from "react";
import Welcome from "./components/Welcome";
import Catalogue from "./components/Catalogue";
import "./App.css";
import {Route, Routes} from 'react-router-dom';

function App() {
  // const WELCOME = "welcome";
  // const CATALOGUE = "catalogue";
  // const [currentScreen, setCurrentScreen] = useState(WELCOME);

  let content = null;

  const handleNextScreen = () => {
    setCurrentScreen(CATALOGUE);
  };

  const handleHomeScreen = () => {
    setCurrentScreen(WELCOME);
  };

  // switch (currentScreen) {
  //   case WELCOME:
  //     content = <Welcome nextScreen={handleNextScreen} />;
  //     break;
  //   case CATALOGUE:
  //     content = <Catalogue nextScreen={handleHomeScreen} />;
  //     break;
  //   default:
  //     content = <Welcome nextScreen={handleNextScreen} />;
  //     break;
  // }

  return (
  <div className="App">
    <Routes>
      <Route path='/'
        element= {<Welcome/>} />
      <Route path='/catalogue'
        element= {<Catalogue/>} />

    </Routes>
  </div>);
}

export default App;
