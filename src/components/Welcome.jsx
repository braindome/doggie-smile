import { Link } from 'react-router-dom';
import './Catalogue.css';

const Welcome = (props) => {
  return (
    <section>
      <h1>Welcome to Doggie Smile!</h1>
      <h2>Start browsing our catalogue</h2>
      <Link to="/catalogue">
        <button className='header_button'>Browse</button>
      </Link>
      {/* <button onClick={props.nextScreen}>Browse</button> */}
    </section>
  );
};

export default Welcome;
