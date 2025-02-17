import { useEffect, useState } from "react";
import { Container, Navbar, Nav, Form } from "react-bootstrap";

function NavBar() {

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', darkMode ? 'dark' : 'light')
    localStorage.setItem('darkMode', darkMode ? 'true' : 'false')
  })

  const handleToggle = () => {
    setDarkMode((prevMode) => !prevMode)
  }

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
        <Form className="d-flex align-items-center">
          <Form.Check 
            type="switch"
            id="dark-mode-switch"
            label="Dark Mode"
            checked={darkMode}
            onChange={handleToggle}
            className="ms-auto"
          />
        </Form>
      </Container>
    </Navbar>
  );
}

export default NavBar;
