import { Link } from "react-router-dom";


const Navbar = () => {
    return (
      <div className="navBar">
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/imgCarousel">
              Image Carousel
            </Link>
          </li>            
          <li>
            <Link to="/faq">
              FAQ
            </Link>
          </li>            
          <li>
            <Link to="/hooks">
              Hooks
            </Link>  
          </li>  
        </ul>
      </div>
    );
  };
  
  export default Navbar;
  