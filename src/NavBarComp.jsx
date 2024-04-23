import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';
import Login from './login';

function NavBarComp() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Deck.</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>

            <Nav className="me-auto">
              <Nav.Link href="#technology" id="basic-navbar-nav"><Link to="/Technology">TECHNOLOGY</Link></Nav.Link>
              <Nav.Link id="basic-navbar-nav"><Link to="/Ideas">IDEAS</Link></Nav.Link>
              <Nav.Link id="basic-navbar-nav"><Link to="/Leadership">LEADERSHIP</Link></Nav.Link>
            
              <Nav.Link href="#video">VIDEO</Nav.Link>
              <Nav.Link href="#news">NEWS</Nav.Link>
              <Nav.Link href="#finance">FINANCE</Nav.Link>
              <Nav.Link href="#entertainment">ENTERTAINMENT</Nav.Link>
            </Nav>

            <Nav>
              <Nav.Link><Link to="/Login">Login</Link> </Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet/>
      </div>
  );
}

export default NavBarComp;
