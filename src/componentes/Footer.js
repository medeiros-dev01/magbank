import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import logo from "../assets/magbank.png";
import applestore from "../assets/applestore.png";
import googleplay from "../assets/googleplay.png";

import "./Footer.scss";

const Footer = () => (
  <footer className="footer">
    <Container>
      <Row className="text-center py-5">
        <Col xs={12} lg={6} className="text-lg-left">
          <Image src={logo} />
        </Col>
        <Col xs={12} lg={4} className="my-5 my-lg-0">
          <Image className="pr-4" src={applestore} />
          <Image src={googleplay} className="ml-2" />
        </Col>
        <Col
          xs={12}
          lg={2}
          className="d-flex align-items-center justify-content-center"
        >
          <a
            href="http://facebook.com/"
            target="_black"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebookSquare}
              color="#7c7c7c"
              size="2x"
            />
          </a>

          <FontAwesomeIcon
            icon={faTwitter}
            color="#7c7c7c"
            size="2x"
            className="ml-4"
          />
          <FontAwesomeIcon
            icon={faYoutube}
            color="#7c7c7c"
            size="2x"
            className="ml-4"
          />
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
