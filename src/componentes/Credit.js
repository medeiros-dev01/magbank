import React from "react";
import { Col, Row, Jumbotron, Image, Container  } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faMobile, faShoppingCart, faWallet } from '@fortawesome/free-solid-svg-icons';

import imageCard from "../assets/creditcard.png";
import imageCardMobile from "../assets/creditcard-mobile.png";

import "./Credit.scss";

const Credit = () => (
<Jumbotron className="bg-white" >
    <Container className="d-md-none">
    <Row>
        <Col>
            <h2 className="credit__title fw-bold">Cartão de crédito</h2>

            
            <p className="text-black-50"><FontAwesomeIcon className="text-danger mx-2 mt-4 text-center" icon={faCreditCard} />Crédito pessoal</p>

           
            <p className=" credit__icon-app text-black-50"><FontAwesomeIcon className="text-danger mx-2 " icon={faMobile} />APP</p>

           
            <p className="text-black-50"><FontAwesomeIcon className="text-danger mx-2" icon={faShoppingCart} />Pagamentos Online</p>

            
            <p className="text-black-50"><FontAwesomeIcon className="text-danger mx-2" icon={faWallet} />Carteira Digital</p>
        </Col>
    </Row>

    <Row>
        <Col>

            <Image className="credit__image d-lg-none mt-5" src={imageCardMobile} />
            <Image className="d-none d-lg-inline-block" src={imageCard} />
            
        </Col>
    </Row>
    </Container>

    <Container className="d-none d-md-inline-block position-relative">

    <Row >
        <Col>
            <h2 className="credit__title fw-bold">Cartão de crédito</h2>
        </Col>
        

    </Row>
    <Row >
        <Col md={2}  >
            <p className="text-black-50"><FontAwesomeIcon className="text-danger mx-2  text-center" icon={faCreditCard} />Crédito pessoal</p> 
            <p className=" credit__icon-app text-black-50"><FontAwesomeIcon className="text-danger mx-2 " icon={faMobile} />APP</p>
        </Col>

        <Col md={3} >
        <p className="text-black-50"><FontAwesomeIcon className="text-danger mx-2" icon={faShoppingCart} />Pagamentos Online</p>
            <p className="text-black-50"><FontAwesomeIcon className="text-danger mx-2" icon={faWallet} />Carteira Digital</p>
            
        </Col>

        <Col  >
            <Image className="credit__image d-lg-none mt-5" src={imageCardMobile} />
            <Image className="d-none d-lg-inline-block" src={imageCard} />
        </Col>
    </Row>


            
    
    </Container>
</Jumbotron>

);

export default Credit;