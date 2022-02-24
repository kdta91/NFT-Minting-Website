import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="home">
      <div className="banner">
        <img
          src="http://placehold.jp/88FEFE/ffffff/1920x450.png?text=Hello%20World!"
          alt=""
        />
      </div>

      <div className="content">
        <h1>Hello World!</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <Link to="/mint" className="btn" style={{ marginTop: "4vw" }}>
          Mint Now
        </Link>
      </div>
    </div>
  );
};

export default Home;
