import React, { Fragment } from "react";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </Fragment>
  );
};

export default Layout;
