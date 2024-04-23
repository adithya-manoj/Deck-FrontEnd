import React from 'react'
import Card from 'react-bootstrap/Card'
import CardFooter from 'react-bootstrap/esm/CardFooter'


function Cardspage(props) {
  return (
    <Card className={`m-5 ${props.Card}`}>
        <Card.Img src={props.image} className={props.CardImg}/>

        <Card.Body className={props.CardBody}>
            <Card.Title>{props.title}</Card.Title>
            <Card.Img src={props.Img_icon_src} className={props.Img_icon}></Card.Img>
            <Card.Subtitle>{props.subtitle}</Card.Subtitle>
            <Card.Text>{props.text}</Card.Text>
        </Card.Body>

        <Card.Footer>
            <small>
                <span style={{ padding: '0.5rem' }}><i class="bi bi-send-arrow-up-fill"> </i>{props.shares}</span>
                <span style={{ padding: '0.5rem' }}><i class="bi bi-eye-fill"> </i>{props.views}</span>
                <span style={{ padding: '0.5rem' }}><i class="bi bi-chat-left-dots-fill"> </i>{props.messages}</span>
            </small>
        </Card.Footer>

    </Card>
  )
}

export default Cardspage