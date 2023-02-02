import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Kai's Gaming Base</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <NavDropdown title="Playstation" id="basic-nav-dropdown">
              <NavDropdown.Item href="/playstation/topTen">Top Ten</NavDropdown.Item>
              <NavDropdown.Item href="/playstation/upcoming">2023 Upcomings</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Switch" id="basic-nav-dropdown">
              <NavDropdown.Item href="/nintendoswitch/topten">Top Ten</NavDropdown.Item>
              <NavDropdown.Item href="/nintendoswitch/upcoming">2023 Upcomings</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;