import { Container, Nav, Navbar } from "react-bootstrap";
import { } from "react-router-dom";


const Header = () => {

  return (
    <Navbar >
      <Container>
        <>
          <Navbar.Brand href="/">CO@WORK</Navbar.Brand>
          <Nav.Link href="/aboutus">About Us</Nav.Link>
          <Nav.Link href="/#">Services</Nav.Link>
          <Nav.Link href="/#">Calendar</Nav.Link>
          <Nav.Link href="/#">Events</Nav.Link>
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