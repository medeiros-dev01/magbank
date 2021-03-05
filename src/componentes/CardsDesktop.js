import React from "react";
import { Card, CardDeck, Container, Button } from "react-bootstrap";
import imageCard1 from "../assets/card01.png";
import imageCard2 from "../assets/card02.png";
import imageCard3 from "../assets/card03.png";

const cardDesktop = () => (
  <Container className="mb-5 text-center pl-0 pr-5 ">
    <CardDeck className="d-none d-lg-flex">
      <Card >
        <Card.Img className="img-fluid" variant="top" src={imageCard1} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
            <Button variant="danger outline-light">Peça já</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={imageCard2} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
            <Button variant="danger outline-light">Peça já</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={imageCard3} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
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
