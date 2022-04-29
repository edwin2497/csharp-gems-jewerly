import { Button, Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useAuth } from "../../hooks/useAuth";

const NavBarPublic = () => {
  const { logout } = useAuth();
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Gem's Jewerly</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
          </Nav>
          <Button onClick={logout}>Logout</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarPublic;
