import MainNavigation from "./main-navigation";
import React from "react";
import { Fragment } from "react/cjs/react.production.min";

function Layout(props) {
  return (
    <Fragment>
      <MainNavigation></MainNavigation>
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
