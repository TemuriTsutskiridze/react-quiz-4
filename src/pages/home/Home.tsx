import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <img
          src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop&crop=center"
          alt="Technology illustration"
          className="home-image"
        />

        <h1 className="home-title">Welcome to Our Platform</h1>

        <p className="home-description">
          Discover amazing features and connect with users from around the
          world. Our platform provides you with the best tools to manage and
          explore user data efficiently.
        </p>

        <Link to="/users" className="home-button">
          Go to Users Page
        </Link>
      </div>
    </div>
  );
};

export default Home;
