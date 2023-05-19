import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
      </Navbar>
      <Container>{children}</Container>
    </div>
  );
};
export default Layout;
