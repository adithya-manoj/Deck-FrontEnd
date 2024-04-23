import React from 'react'
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const AdminNav = () => {
  return (
    <div>
        <Navbar expand="lg">
        <Container>
            <Navbar.Brand>DECK.</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}

export default AdminNav