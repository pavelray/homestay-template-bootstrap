import NavbarMenu from "@/components/ui/Navbar/Navbar";
import React, { Fragment } from "react";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <header>
        <NavbarMenu />
      </header>
      <main style={{ paddingTop: "3.5rem" }}>{children}</main>
      <footer></footer>
    </Fragment>
  );
};

export default Layout;
