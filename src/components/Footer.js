import { Link } from "react-router-dom";
import github from "../images/github.svg";
import linkedIn from "../images/linkedin.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2023 Supersite, Powered by News API</p>
      <div className="footer__right">
        <div className="footer__links">
          <Link to="/" className="footer__link">
            <button className="footer__button footer__text">Home</button>
          </Link>
          <Link
            to="https://practicum.com"
            className="footer__link"
            target="_blank"
          >
            <button className="footer__text footer__button">TripleTen</button>
          </Link>
        </div>
        <div className="footer__icons">
          <Link
            to="https://github.com/Ian-Diz"
            className="footer__icon"
            target="_blank"
          >
            <button className="footer__button footer__github">
              <img alt="Github logo" src={github} className="footer__github" />
            </button>
          </Link>
          <Link to="https://www.linkedin.com/in/iandizney/" target="_blank">
            <button className="footer__linkedIn footer__button">
              <img
                src={linkedIn}
                alt="LinkedIn logo"
                className="footer__linkedIn"
              />
            </button>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
