const Welcome = (props) => {
  return (
    <section>
      <h1>Welcome to Doggie Smile!</h1>
      <h2>Start browsing our catalogue</h2>
      <button onClick={props.nextScreen}>Browse</button>
    </section>
  );
};

export default Welcome;
