import "./footer.scss";
import Facebook from '../../assets/facebook.svg';
import Instragram from '../../assets/instragram.svg';
import Twitter from '../../assets/twitter.svg';
import Youtube from '../../assets/youtube.svg';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-about">
          <h3>About</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
            scelerisque ut pellentesque etiam faucibus diam, nulla sit vitae. In
            gravida tellus aliquet volutpat.
          </p>
        </div>
        <div className="footer-menu-links">
          <h3>Quick Links</h3>
          <a href="#">Help center</a>
          <a href="#">Terms and Conditions</a>
          <a href="#">Privacy policy</a>
          <a href="#">Refund Policy</a>
          <a href="#">Affiliate</a>
        </div>
        <div className="footer-subcribe">
          <div className="social-media-links">
            <p>Follow us on:</p>
            <div className="social-media">
            <img src={Facebook} alt="Facebook" />
            <img src={Instragram} alt="Instragram" />
            <img src={Youtube} alt="Youtube" />
            <img src={Twitter} alt="Twitter" />
            </div>
          </div>
        </div>
      </div>
      <footer>Copyright 2023 Webxear. All rights reserved</footer>
    </div>
  );
};

export default Footer;
