import NavbarMenu from "@/components/ui/Navbar/Navbar";
import React, { Fragment } from "react";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <header>
        <NavbarMenu />
      </header>
      <main style={{ paddingTop: "3.5rem" }}>{children}</main>
      <footer>
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-12 text-center">
              COPYRIGHT © 2023 Aaltapori - ALL RIGHTS RESERVED.
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-md-12 text-center ">
              <p>
                <small className="text-body-secondary">Developed By #Ray</small>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Layout;
