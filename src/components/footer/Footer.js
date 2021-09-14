import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Link to="/">
        <i className="fas fa-home"></i>
      </Link>
      <Link to="/like">
        <i className="far fa-heart"></i>
      </Link>
      <Link to="/">
        <i className="fas fa-cogs"></i>
      </Link>
    </footer>
  );
}

export default Footer;
