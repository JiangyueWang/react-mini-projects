import { Link } from "react-router-dom";

const ReactHooks = () => {
    return (  
        <div className="navBar">
        <ul>
          <li>
            <Link to="/hooks/useRef">
              useRef
            </Link>

          </li>            
        </ul>
      </div>
    );
}
 
export default ReactHooks;