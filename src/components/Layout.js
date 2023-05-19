import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

export const Layout = ({ children }) => {
  return (
    <div>
      <Container>{children}</Container>
    </div>
  );
};
