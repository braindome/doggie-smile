import "./Catalogue.css";
import { Link } from "react-router-dom";
import home_icon from "../assets/home-icon.svg";
import filter_icon from "../assets/filter.svg"
import search_icon from "../assets/magnifying-glass.svg";
import * as React from 'react';

const Header = ({ searchInput, onSearchInputChange, onSearch }) => {

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  const handeSearchByName = () => {
    // set search filter
    setOpen(false);
  }
  const handeSearchByAge = () => {
    // set search filter
    setOpen(false);
  }
  const handeSearchByChipNr = () => {
    // set search filter
    setOpen(false);
  }
  const handeSearchByBreed = () => {
    // set search filter
    setOpen(false);
  }
  const handeSearchBySex = () => {
    // set search filter
    setOpen(false);
  }
  const handeSearchByOwner = () => {
    // set search filter
    setOpen(false);
  }

  return (
    <div className="header">
      <div className="left-section">
        <Link to="/">
          <button className="header_button">
            <img src={home_icon} alt="Home" />
          </button>
          {/* <span className="header_button">
            <img src={home_icon} alt="Home" className="svg_icon"/>
          </span> */}
        </Link>
      </div>
      <h1>Catalogue</h1>
      <div className="right-section">

        <input
          type="text"
          value={searchInput}
          onChange={(e) => onSearchInputChange(e.target.value)}
          onSearch={handleKeyPress}
          placeholder="Search for string..."
        />
        <div className="button_container" > 
          <button className="header_button" onClick={onSearch}>
            <img src={search_icon} alt="" />
          </button>
        </div>
        <div className="button_container"> 
          <button className="header_button" onClick={handleOpen}>
            <img src={filter_icon} alt="" />
          </button>
          {open ? (
            <ul className="menu">
              <li className="menu-item">
                <button>Name</button>
              </li>
              <li className="menu-item">
                <button>Age</button>
              </li>
              <li className="menu-item">
                <button>Chip Nr</button>
              </li>
              <li className="menu-item">
                <button>Breed</button>
              </li>
              <li className="menu-item">
                <button>Sex</button>
              </li>
              <li className="menu-item">
                <button>Owner</button>
              </li>
            </ul>
          ) : null}
          {/* {open ? <div>Is Open</div> : <div>Is Closed</div>} */}
        </div>
      </div>
    </div>
  );
};

export default Header;
