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
          
          <Navbar.Brand> <Link to="/" className='fw-bold text-decoration-none text-reset text-dark'>Deck.</Link> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>

            <Nav className="me-auto">
              <Nav.Link id="basic-navbar-nav"><Link to="/Technology" className='fw-bold text-decoration-none text-reset text-dark'>TECHNOLOGY</Link></Nav.Link>
              <Nav.Link id="basic-navbar-nav"><Link to="/Ideas" className='fw-bold text-decoration-none text-reset text-dark'>IDEAS</Link></Nav.Link>
              <Nav.Link id="basic-navbar-nav"><Link to="/Leadership" className='fw-bold text-decoration-none text-reset text-dark'>LEADERSHIP</Link></Nav.Link>
            
              <Nav.Link>VIDEO</Nav.Link>
              <Nav.Link>NEWS</Nav.Link>
              <Nav.Link>FINANCE</Nav.Link>
              <Nav.Link>ENTERTAINMENT</Nav.Link>
            </Nav>

            <Nav>
              <Nav.Link><Link to="/Login" className='btn btn-dark text-light fw-bold text-decoration-none'>Login</Link> </Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet/>
      </div>
  );
}

export default NavBarComp;
