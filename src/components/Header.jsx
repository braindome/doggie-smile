import "./Catalogue.css";
import { Link } from "react-router-dom";
import home_icon from "../assets/home-icon.svg";
import search_icon from "../assets/magnifying-glass.svg";

const Header = ({ searchInput, onSearchInputChange, onSearch }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

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
        <button className="header_button" onClick={onSearch}>
          <img src={search_icon} alt="" />
        </button>
        {/* <span className="header_button" onClick={onSearch} >
          <img src={search_icon} alt="" className="svg_icon" />
        </span> */}
      </div>
    </div>
  );
};

export default Header;
