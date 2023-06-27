import "../styles/css/home.css";
import FrontPage from "./home/front";
import LinkButton from "./home/link-button";


const Home = () => {
  return (
    <div className="main">
      <header>
        <ul>
          <li>
            <LinkButton to="">Home</LinkButton>
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
