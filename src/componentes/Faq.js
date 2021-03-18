import React, { useState, useEffect } from "react";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import IconText from "./IconText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faWallet,
  faShieldAlt,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

import "./Faq.scss";

const Faq = () => {
  const options = [
    { icon: faCreditCard, text: "Cartão de crédito" },
    { icon: faWallet, text: "Conta e abertura" },
    { icon: faShieldAlt, text: "Token digital" },
    { icon: faUserTie, text: "Produtos e serviços" },
  ];

  const [index, setIndex] = useState(0);

  const handClick = key => {
    
    setIndex(key);
  }

  useEffect(() =>{
    console.log(index);
  }, [index]);

  return (
    <section className="faq text-light">
      <Container className="py-5">
        <Row className="justify-content-center">
          <h2 className="faq-title my-5 "> Dúvidas frequentes</h2>
        </Row>

        <Row className="d-flex align-items-center justify-items-center">
          <Col className="d-lg-none mb-5" xs={12}>
            <Row>
              {options.map(({ icon }, key) => (
                <Col className="d-flex justify-content-center" key={key}>
                  <FontAwesomeIcon
                    icon={icon}
                    size="2x"
                    color={key === index ? "#fff" : "#bbb" }
                    onClick={() => handClick(key)}
                  />
                </Col>
              ))}
            </Row>

            <Row className="justify-content-center mt-5">
                <p className="lead">
                  {options[index].text}
                </p>
            </Row>
          </Col>

          <Col className="d-none d-lg-block">
            {options.map(({ icon, text }, key) => (
              <IconText
                icon={icon}
                size={3}
                className="faq-clickable mb-3"
                textClassname="lead"
                color={key === index ? "#fff" : "#bbb" }
                onClick={() => handClick(key)}
                key={key}
              >
                {text}
              </IconText>
            ))}
          </Col>

          <Col>
            <Accordion defaultActiveKey="0" activeKey={`${index}`}>
              <Card>
                
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    Lorem ipsum dolor sit amet
                  </Accordion.Toggle>
      
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis veniam quis sequi dolorum commodi, id voluptatum
                    doloremque incidunt autem sit hic fuga excepturi maxime
                    nobis ex ab. Obcaecati, incidunt fugiat. Lorem, ipsum dolor
                    sit amet consectetur adipisicing elit. Nesciunt placeat
                    nostrum vitae consequatur mollitia necessitatibus, iste
                    voluptate. Doloribus odio est fugiat labore, aliquid
                    aspernatur quia perferendis officia, illo nam dolorum?
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
               
                  <Accordion.Toggle as={Card.Header} eventKey="1">
                    Lorem ipsum dolor sit amet
                  </Accordion.Toggle>
                
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis veniam quis sequi dolorum commodi, id voluptatum
                    doloremque incidunt autem sit hic fuga excepturi maxime
                    nobis ex ab. Obcaecati, incidunt fugiat. Lorem, ipsum dolor
                    sit amet consectetur adipisicing elit. Nesciunt placeat
                    nostrum vitae consequatur mollitia necessitatibus, iste
                    voluptate. Doloribus odio est fugiat labore, aliquid
                    aspernatur quia perferendis officia, illo nam dolorum?
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Card.Header} eventKey="2">
                    Lorem ipsum dolor sit amet
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis veniam quis sequi dolorum commodi, id voluptatum
                    doloremque incidunt autem sit hic fuga excepturi maxime
                    nobis ex ab. Obcaecati, incidunt fugiat. Lorem, ipsum dolor
                    sit amet consectetur adipisicing elit. Nesciunt placeat
                    nostrum vitae consequatur mollitia necessitatibus, iste
                    voluptate. Doloribus odio est fugiat labore, aliquid
                    aspernatur quia perferendis officia, illo nam dolorum?
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Card.Header}eventKey="3">
                    Lorem ipsum dolor sit amet
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis veniam quis sequi dolorum commodi, id voluptatum
                    doloremque incidunt autem sit hic fuga excepturi maxime
                    nobis ex ab. Obcaecati, incidunt fugiat. Lorem, ipsum dolor
                    sit amet consectetur adipisicing elit. Nesciunt placeat
                    nostrum vitae consequatur mollitia necessitatibus, iste
                    voluptate. Doloribus odio est fugiat labore, aliquid
                    aspernatur quia perferendis officia, illo nam dolorum?
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Faq;
