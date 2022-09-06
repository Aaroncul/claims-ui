import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector } from "react-redux";
import Login from "../../userManagement/login";
import { Fragment } from "react";

const logout = (event) => {
    logout();
}

const HeaderNavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="home">AllState Claims</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {useSelector(state => state.user.role) !== "" ?
                            <Fragment>
                                <NavDropdown title="New Claim" id="basic-nav-dropdown">
                                    <NavDropdown.Item as={Link} to="new-claim/pet">Pet</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="new-claim/property">Property</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="new-claim/vehicle">Vehicle</NavDropdown.Item>
                                </NavDropdown>

                                <Nav.Link as={Link} to="find">My Claims</Nav.Link>
                                <Nav.Link as={Link} to="home" onClick={logout}>Log Out</Nav.Link>
                            </Fragment> 
                            :
                            <Nav.Link as={Link} to="login">Log In</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HeaderNavBar;