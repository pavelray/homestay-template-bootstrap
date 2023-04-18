import Link from "next/link";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavbarMenu = () => {
  return (
    <Navbar bg="warning" expand="lg" className="fixed-top">
      <Container>
        <Navbar.Brand>Aaltapori</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" href="/">
              Home
            </Link>
            <NavDropdown title="Gallary" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link href="/gallary">Photo Gallary</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link href="/gallary">Video Gallary</Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <Link href="/contact"> Contact</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;
