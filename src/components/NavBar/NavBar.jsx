import { Link } from "react-router-dom";


const Navbar = () => {
    return (
      <div className="navBar">
        <ul>
          <li>
            <Link to="/imgCarousel">
              Image Carousel
            </Link>
          </li>
        </ul>
      </div>
    );
  };
  
  export default Navbar;
  