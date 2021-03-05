import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import imageCard from "../assets/card02.png";

import "./card.scss";

const Cards2 = () => (
  <Container className="container__card d-md-none">
    <Card style={{ width: "21.5rem" }}>
      <Card.Img variant="top" src={imageCard} />
      <Card.Body>
        <Card.Title>Loren ipsum dolor sit</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem earum labore sequi pariatur amet, atque magnam officia quam repellat neque laborum consectetur commodi nesciunt, aliquam nobis tempora dolorum blanditiis quasi?
        </Card.Text>
        <Button variant="danger outline-light">Peça já</Button>
      </Card.Body>
    </Card>
  </Container>

);

export default Cards2;
