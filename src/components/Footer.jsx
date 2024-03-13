import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <nav className="nav">
        <p>Contact Us: truckleucla@gmail.com</p>
        {/*<Link to="/home-page" className="site-title">
            Truckle
        </Link>*/}
        <ul>
            <a href="https://github.com/OscarBeckinger/truckle" target="_blank" rel="noopener noreferrer">
            <FaGithub size="3em"/>
            </a>
        </ul>
      </nav>
      <div className="social-links">
      </div>
    </footer>
  );
}

