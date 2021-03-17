import React from "react";
import { Container, Row, Col, Accordion, Card, Button } from "react-bootstrap";
import IconText from "./IconText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faWallet,
  faShieldAlt,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

import "./Faq.scss";

const Faq = () => (
  <section className="faq text-light">
    <Container className="py-5">

      <Row className="justify-content-center">
        <h2 className="faq-title my-5 "> Dúvidas frequentes</h2>
      </Row>

      <Row className="d-flex align-items-center justify-items-center">
        <Col className="d-lg-none mb-5" xs={12}>
          <Row>
            <Col className="d-flex justify-content-center">
              <FontAwesomeIcon icon={faCreditCard} size="2x" color="#fff" />
            </Col>

            <Col className="d-flex justify-content-center">
              <FontAwesomeIcon icon={faWallet} size="2x" color="#fff" />
            </Col>

            <Col className="d-flex justify-content-center">
              <FontAwesomeIcon icon={faShieldAlt} size="2x" color="#fff" />
            </Col>

            <Col className="d-flex justify-content-center">
              <FontAwesomeIcon icon={faUserTie} size="2x" color="#fff" />
            </Col>
          </Row>
        </Col>

        <Col className="d-none d-lg-block">
          <IconText
            icon={faCreditCard}
            size={3}
            className="mb-3"
            textClassname="lead"
            color="#fff"
          >
            Cartão de crédito e débito
          </IconText>
          <IconText
            icon={faWallet}
            size={3}
            className="mb-3"
            textClassname="lead"
            color="#fff"
          >
            Conta e abertura
          </IconText>
          <IconText
            icon={faShieldAlt}
            size={3}
            className="mb-3"
            textClassname="lead"
            color="#fff"
          >
            Token digital
          </IconText>
          <IconText icon={faUserTie} size={3} color="#fff">
            Produtos e serviços
          </IconText>
        </Col>

        <Col>
          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Lorem ipsum dolor sit amet
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis veniam quis sequi dolorum commodi, id voluptatum
                  doloremque incidunt autem sit hic fuga excepturi maxime nobis
                  ex ab. Obcaecati, incidunt fugiat. Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Nesciunt placeat nostrum vitae
                  consequatur mollitia necessitatibus, iste voluptate. Doloribus
                  odio est fugiat labore, aliquid aspernatur quia perferendis
                  officia, illo nam dolorum?
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Lorem ipsum dolor sit amet
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis veniam quis sequi dolorum commodi, id voluptatum
                  doloremque incidunt autem sit hic fuga excepturi maxime nobis
                  ex ab. Obcaecati, incidunt fugiat. Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Nesciunt placeat nostrum vitae
                  consequatur mollitia necessitatibus, iste voluptate. Doloribus
                  odio est fugiat labore, aliquid aspernatur quia perferendis
                  officia, illo nam dolorum?
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  Lorem ipsum dolor sit amet
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis veniam quis sequi dolorum commodi, id voluptatum
                  doloremque incidunt autem sit hic fuga excepturi maxime nobis
                  ex ab. Obcaecati, incidunt fugiat. Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Nesciunt placeat nostrum vitae
                  consequatur mollitia necessitatibus, iste voluptate. Doloribus
                  odio est fugiat labore, aliquid aspernatur quia perferendis
                  officia, illo nam dolorum?
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  Lorem ipsum dolor sit amet
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis veniam quis sequi dolorum commodi, id voluptatum
                  doloremque incidunt autem sit hic fuga excepturi maxime nobis
                  ex ab. Obcaecati, incidunt fugiat. Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Nesciunt placeat nostrum vitae
                  consequatur mollitia necessitatibus, iste voluptate. Doloribus
                  odio est fugiat labore, aliquid aspernatur quia perferendis
                  officia, illo nam dolorum?
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Faq;
