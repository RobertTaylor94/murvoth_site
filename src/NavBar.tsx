import { Container, Navbar, Nav } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar expand="md" className="bg-body-tertiary" sticky="top">
      <Container>
        <Navbar.Brand href="/">Murvoth</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/playgrounds">Playgrounds</Nav.Link>
            <Nav.Link href="/media">Media</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
