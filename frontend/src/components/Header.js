import React, { useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { } from "react-router-dom";
import { logout } from "../redux/actions/userActions";


const Header = () => {

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => { }, [userInfo]);

  return (
    <Navbar >
      <Container>
        <>
          <Navbar.Brand href="/">CO@WORK</Navbar.Brand>
          <Nav.Link href="/aboutus">About us</Nav.Link>
          <Nav.Link href="/services">Services</Nav.Link>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <>
                <Nav.Link href="/contactus">Contact Us &#9990;</Nav.Link>
              </>
            </Nav>
          </Navbar.Collapse>
        </>
      </Container>
    </Navbar>
  );
}

export default Header;