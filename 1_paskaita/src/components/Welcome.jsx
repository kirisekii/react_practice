const Welcome = ({ isLoggedIn }) => {
  return isLoggedIn ? (
    <div>Hello, nice to meet you</div>
  ) : (
    <div>Plase log in</div>
  );
};

export default Welcome;
