import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";


const Buttons = () => (
    <Container className="text-center mb-5">
        <Row>
            <Col>
                <Button variant="success" size="lg" >Abra sua conta</Button>
            </Col>
        </Row>
    </Container>
)

export default Buttons;