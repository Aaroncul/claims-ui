import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const HeaderNavBar = () => {
    return ( 
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="">AllState Claims</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="New Claim" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="new-claim/pet">Pet</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="new-claim/property">Property</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="new-claim/vehicle">Vehicle</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="login">Log In</Nav.Link>                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>    
     );
}
 
export default HeaderNavBar;