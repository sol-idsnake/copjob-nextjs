import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import Row from "react-bootstrap/Row";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  padding: 0;
`;

const Header = () => (
  <header>
    <StyledContainer fluid>
      <Row noGutters={true}>
        <Col lg={true}>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Indexx page</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                {/* https://github.com/vercel/next.js/tree/master/examples/with-styled-components#notes */}
                <Link href="/" passHref>
                  <Nav.Link>Home</Nav.Link>
                </Link>
              </Nav>
              <Nav>
                <Link href="/#login" passHref>
                  <Nav.Link>Login</Nav.Link>
                </Link>
                <Link href="/#signup" passHref>
                  <Nav.Link>Signup</Nav.Link>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </StyledContainer>
  </header>
);

export default Header;
