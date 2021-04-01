import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faUser } from "@fortawesome/free-solid-svg-icons";

import AccountBalance from "../componentes/AccountBalance";
import AccountPayments from "../componentes/AccountPayments";
import AccountHistory from "../componentes/AccountHistory";

import "./Dashboard.scss";

const Dashboard = ({ className = false }) => {
  const [activeLink, setActiveLink] = useState(0);

  const links = [
    { text: "Minha Conta", path: "/dashboard", exact: true },
    { text: "Pagamentos", path: "/dashboard/payments" },
    { text: "Extrato", path: "/dashboard/history" },
  ];

  const data = {
    latestBalance: [
      { date: "22/07", description: "SAQUE 24h 012345", value: "300,00" },
      { date: "22/07", description: "SUPRMERCADO 24h 012345", value: "300" },
      { date: "22/07", description: "SUPRMERCADO 24h 012345", value: "300" },
      { date: "15/07", description: "FARMÁCIA 121254", value: "350,00" },
      { date: "15/07", description: "FARMÁCIA 121254", value: "50,00" },
    ],

    futureBalance: [
      { date: "22/08", description: "SALÁRIO 01258", value: "3000,00" },
      { date: "22/08", description: "IMAGINE 012345", value: "275,00" },
      { date: "22/08", description: "NETFLIX 012345", value: "30,00" },
      { date: "15/08", description: "FARMÁCIA 121254", value: "350,00" },
    ],

    history: [
      { date: "17/07", description: "SAQUE 24H 012345", value: "200,00-", balance: "" },
      { date: "17/07", description: "SALDO DO DIA", value: "", balance: "2.780,00" },
      { date: "19/07", description: "ESTACIONAMENTO 123456", value: "12,00-", balance: "" },
      { date: "19/07", description: "COMPRA INTERNET 123432", value: "450,00-", balance: "" },
      { date: "19/07", description: "SALDO DO DIA", value: "", balance: "2318,00" },
      { date: "21/07", description: "SUPERMERCADO 231322", value: "275,90", balance: "" },
      { date: "21/07", description: "ESTACIONAMENTO 025874", value: "12,00-", balance: "" },
      { date: "21/07", description: "SHOPPING 123432", value: "180,00-", balance: "" },
      { date: "21/07", description: "SALDO DO DIA", value: "", balance: "1851,00" },
      { date: "22/07", description: "SUPERMERCADO 158745", value: "275,90-", balance: "" },
      { date: "22/07", description: "DÉPOSITO", value: "1000,00", balance: "" },
      { date: "22/07", description: "SALDO DO DIA", value: "", balance: "2576,00" },
      
    ]
  };

  return (
    <Container className={`dashboard py-5${className ? className : ""}`}>
      <Row>
        <Col xs={12} lg={4}>
          <Row className="align-items-center mb-5">
            <Col xs={3}>
              <span className="dashboard__user-avatar">
                <FontAwesomeIcon icon={faCircle} size="5x" color="#f8f9fa" />
                <FontAwesomeIcon
                  className="dashboard__user-icon"
                  icon={faUser}
                  size="3x"
                  color="#7c7d7d"
                />
              </span>
            </Col>
            <Col xs={9}>
              <h4>Jardelino Medeiros</h4>
              <p className="text-muted">ag:1234 c/c:4321-5</p>
            </Col>
          </Row>

          {links.map(({ text, path, exact }, key) => (
            <Link
              className="dashboard__link"
              to={path}
              exact={exact ? exact : false}
              key={key}
            >
              <Button
                className={`dashboard__button text-left ${
                  key === activeLink ? "dashboard__button--active" : ""
                }`}
                variant="link"
                size="lg"
                block
                onClick={() => setActiveLink(key)}
              >
                {text}
              </Button>
            </Link>
          ))}
        </Col>

        <Switch>
          <Route path="/dashboard/history">
            <AccountHistory data={data} />
          </Route>
          <Route path="/dashboard/payments">
            <AccountPayments />
          </Route>
          <Route path="/dashboard">
            <AccountBalance data={data} />
          </Route>
        </Switch>
      </Row>
    </Container>
  );
};

export default Dashboard;
