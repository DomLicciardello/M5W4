import { Navbar, Nav, Container } from 'react-bootstrap'

const MyNav = () => (
  <Navbar
    expand="lg"
    className='MyNav-Style'
    bg="light"
    data-bs-theme="light"
  >
    <Container fluid>
      <Navbar.Brand href="#"><img style={{width:'100px'}} src='https://i.ibb.co/x51KFTK/logo.png' alt='logo'/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#">HOME</Nav.Link>
          <Nav.Link href="#">ABOUT</Nav.Link>
          <Nav.Link href="#">BROWSE</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

export default MyNav
