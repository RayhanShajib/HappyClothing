import { Link } from "react-router-dom";
import "./hero-section.scss";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="left">
        <Link className="link" to="/shop/hats">
          Hats
        </Link>
        <Link className="link" to="/shop/jackets">
          Jackets
        </Link>
        <Link className="link" to="/shop/sneakers">
          Sneakers
        </Link>
        <Link className="link" to="/shop/womens">
          Womens
        </Link>
        <Link className="link" to="/shop/mens">
          Mens
        </Link>
      </div>
    </div>
  );
};

export default Hero;
