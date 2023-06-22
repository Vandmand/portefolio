import { Link } from "react-router-dom";
import "../styles/css/home.css";
import FrontPage from "./home/front";
import { Button } from "@mui/material";

const Home = () => {
  return (
    <div className="main">
      <header>
        <ul>
          <li>
            <Link to={""} tabIndex={-1}>
              <Button variant="outlined">Home</Button>
            </Link>
          </li>
          <li>
            <Link to={""} tabIndex={-1}>
              <Button variant="outlined">Projects</Button>
            </Link>
          </li>
          <li>
            <Link to={""} tabIndex={-1}>
              <Button variant="outlined">Contact</Button>
            </Link>
          </li>
        </ul>
      </header>
      <div className="front">
        <FrontPage />
      </div>
      <p>
        I'm a 19-year-old frontend developer, with a thirst for knowledge,
        systems and design. I thrive on the wild, and thriving on embracing new
        projects and pushing the boundaries of what I can achieve.
      </p>
      <footer></footer>
    </div>
  );
};

export default Home;
