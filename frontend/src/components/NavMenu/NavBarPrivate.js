import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const NavBarPrivate = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>Gem's Jewerly</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Administrative" id="basic-nav-dropdown">
              <NavDropdown.Item href="/employee">Employee</NavDropdown.Item>
              <NavDropdown.Item href="/customer">Customer</NavDropdown.Item>
              {/* <NavDropdown.Item href="/workorder">WorkOrder</NavDropdown.Item> */}
            </NavDropdown>
            <NavDropdown title="Financial" id="basic-nav-dropdown">
              <NavDropdown.Item href="/invoice">Invoices</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Inventory"
              id="basic-nav-dropdown"
            ></NavDropdown>
            <NavDropdown title="Setting" id="basic-nav-dropdown"></NavDropdown>
            {/* <Nav.Link href="/logout">Logout</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarPrivate;
