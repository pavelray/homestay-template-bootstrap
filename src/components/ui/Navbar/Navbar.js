import React from "react";

const NavbarMenu = () => {
  return (
    <nav className="p-5">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 text-center">
          <div
            className=""
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
        <div className="col-md-4">
          <div
            style={{
              display: 'flex',
              fontSize: "1.2rem",
              justifyContent: 'flex-end'
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
