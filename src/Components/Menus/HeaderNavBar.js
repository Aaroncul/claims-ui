import { Link } from "react-router-dom";

const HeaderNavBar = () => {
    return ( 
        <nav className="NavBar">
            <Link to="">Home</Link>
            <span> | </span>
            <Link to="new-claim">Make a claim</Link>
            <span> | </span>
            <Link to="login">Log in</Link>
        </nav>
     );
}
 
export default HeaderNavBar;