import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap-icons/font/bootstrap-icons.css'


function FooterComp() {
  return (
    <footer>
      <div>
    <Container fluid>
      <Row className="bg-black text-white p-5">
        <Col sm={2}>
        Deck.
        <p>© 2018 Deck </p>
        <p>Component based UI Kit</p>
        </Col>
        <Col sm={2}>
            <h6>TECHNOLOGY</h6>
            <h6>IDEAS</h6>
        </Col>
        <Col sm={2}>
        <h6>LEADERSHIP</h6>
        <h6>VIDEO</h6>
            
        </Col>
        <Col sm={2}>
        <h6>NEWS</h6>
        <h6>FINANCE</h6>
        </Col>
        <Col sm={2}>
        <h6>ENTERTAINMENT</h6>
        <h6>CAREER</h6>
        </Col>
        <Col sm={2}>
        <div>
        Follow Us:   
        <i class="bi bi-instagram"> </i>
        <i class="bi bi-pinterest"> </i>
        <i class="bi bi-twitter"> </i>
        <i class="bi bi-facebook"> </i>
        </div>
        
        <input type="email" name="" id="" placeholder='Enter your E-mail' />
        </Col>
      </Row>
    </Container>
    </div>
    </footer>
    
  )
}

export default FooterComp