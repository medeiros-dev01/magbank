import React, { useState} from "react";
import { useHistory } from "react-router-dom";
import { Row, Col, Form, Button, Image } from "react-bootstrap";
import logo from "../assets/logo-login.png";

import "./Login.scss";

const Login = ({ auth, text }) => {

  const [name, setName] = useState();
  const [account, setAccount] = useState();
  const history = useHistory();

  const handleSubmit = () => {
    auth.login(name, account, history.push("/dashboard"));
  }

  return (
    <section className="login">
      <div className="login__container">
        <Row>
          <Col className="text-center text-light">
            <Image src={logo} className="mb-5" />
            <Form>
              <Form>

              <Form.Group controlId="formBasicEmail">
                  <Form.Label className="lead">
                    <strong>Nome e Sobrenome</strong>
                  </Form.Label>
                  <Form.Control type="text" value={name} onChange={(e) => setName(e.currentTarget.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="lead">
                    <strong>Número da Conta</strong>
                  </Form.Label>
                  <Form.Control type="number" value={account} onChange={(e) => setAccount(e.currentTarget.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label className="lead">
                    <strong>Senha</strong>
                  </Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                  <Button className="mt-3" variant="success" type="submit" onClick={handleSubmit}>
                    Entrar
                  </Button>
                
              </Form>
            </Form>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Login;
