import { Link } from "react-router-dom";

const ClaimsNavBar = () => {
    return (
        <nav className="NavBar">
            <Link to="pet">Pet</Link >
            <br />
            <Link to="property">Property</Link>
            <br />
            <Link to="vehicle">Vehicle</Link>
        </nav>
    );
}

export default ClaimsNavBar;