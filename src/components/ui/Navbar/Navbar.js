import Link from "next/link";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavbarMenu = () => {
  return (
    <nav className="p-5">
      <div className="row">
        <div className="order-1 col-7">
          <div
            className="float-end "
            style={{
              border: "2px solid black",
              padding: "20px",
              fontSize: "1.5rem",
              textTransform: "uppercase",
            }}
          >
            Welcome To Aaltapori Homestay
          </div>
        </div>
        <div className="order-2 col-5">
          <div
            className="float-end"
            style={{
              fontSize: "1.2rem",
            }}
          >
            Phone No: <a href="tel:08101830794">08101830794</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMenu;
