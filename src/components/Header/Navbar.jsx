import React from "react";
import {
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavDropdown,
} from "react-bootstrap";
import "./Navbar.css";

function NavbarPage() {
  return (
    <Navbar className="navbar" expand="md" bg="dark" variant="dark">
      <Container fluid>
        <NavbarBrand href="/">Happy</NavbarBrand>
        <Navbar.Toggle aria-control="navbar-responsive-nav" />
        <Navbar.Collapse id="navbar-responsive-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/" className="active">
              Home
            </Nav.Link>
            <Nav.Link>About</Nav.Link>
            <Nav.Link>Services</Nav.Link>
            <Nav.Link>Features</Nav.Link>
            <Nav.Link>Advisor</Nav.Link>
            <Nav.Link>Review</Nav.Link>
            <NavDropdown title="Pages" id="navbar-dropdown">
              <NavDropdown.Item>SinglePages</NavDropdown.Item>
              <NavDropdown.Item>BlogPages</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPage;
