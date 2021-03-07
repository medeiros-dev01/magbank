import React from "react";
import { Card, CardDeck, Container, Button } from "react-bootstrap";
import imageCard1 from "../assets/card01.png";
import imageCard2 from "../assets/card02.png";
import imageCard3 from "../assets/card03.png";

const cardDesktop = () => (
  <Container className="mb-5 pl-0 pr-5 ">
    <CardDeck className="d-none d-lg-flex">
      <Card >
        <Card.Img className="img-fluid" variant="top" src={imageCard1} />
        <Card.Body>
          <Card.Title>Lorem ipsum dolor sit</Card.Title>
          <Card.Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti repudiandae est possimus ut itaque maiores dolor pariatur quo placeat. Dolorem repudiandae aut laudantium, obcaecati quia assumenda vel necessitatibus soluta? Facilis!
          </Card.Text>
        </Card.Body>
        <Card.Footer >
            <Button  variant="danger outline-light">Peça já</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={imageCard2} />
        <Card.Body>
          <Card.Title>Lorem ipsum dolor sit</Card.Title>
          <Card.Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti repudiandae est possimus ut itaque maiores dolor pariatur quo placeat. Dolorem repudiandae aut laudantium, obcaecati quia assumenda vel necessitatibus soluta? Facilis!
          </Card.Text>
        </Card.Body>
        <Card.Footer>
            <Button variant="danger outline-light">Peça já</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={imageCard3} />
        <Card.Body>
          <Card.Title>Lorem ipsum dolor sit</Card.Title>
          <Card.Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti repudiandae est possimus ut itaque maiores dolor pariatur quo placeat. Dolorem repudiandae aut laudantium, obcaecati quia assumenda vel necessitatibus soluta? Facilis!
          </Card.Text>
        </Card.Body>
        <Card.Footer>
            <Button variant="danger outline-light">Peça já</Button>
        </Card.Footer>
      </Card>
    </CardDeck>
  </Container>
);

export default cardDesktop;
