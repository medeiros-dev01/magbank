import React from "react";
import { Col, Button, Tabs, Tab, Form } from "react-bootstrap";

const AccountPayments = () => (
  <>
    <Col xs={12} lg={8} className="mt-lg-5 pt-lg-5">
      <h3 className="mt-4">Pagamentos</h3>
      <Tabs className="mt-5 pt-lg-2" defaultActiveKey="boleto">
        <Tab eventKey="boleto" title="Boleto">
          <Form>
            <Form.Group controlId="formBarCode" className="my-5">
              <Form.Label>Código de barras</Form.Label>
              <Form.Control
                type="number"
                placeholder="Insira o código de barras"
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="formPaymentType" className="mb-5">
              <Form.Label>Forma de pagamento</Form.Label>
              <div className="d-flex">
                <Form.Check
                  type="radio"
                  id="debit"
                  label="Débito em Conta Corrente"
                  name="paymentsType"
                />
                <Form.Check
                  type="radio"
                  id="credit"
                  className="ml-4"
                  label="Cartão de Crédito"
                  name="paymentsType"
                />
              </div>
            </Form.Group>

            <Button variant="success">Continuar</Button>
          </Form>
        </Tab>

        <Tab eventKey="transfer" title="Transferência">
          
            <Form>
              <Form.Row className="mt-5">
                <Form.Group as={Col} controlId="formGridbank" className="pr-4"  >
                  <Form.Label>Banco</Form.Label>
                  <Form.Control
                    as="select"
                    defaultValue="Choose..."
                    custom
                  >
                    <option>Selecione</option>
                    <option>Itau</option>
                    <option>Banrisul</option>
                    <option>Bradesco</option>
                    <option>banco Do Brasil</option>
                    <option>NuBank</option>
                    <option>Outros</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridAgency" className="pr-4">
                  <Form.Label>Agência</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridAccount" className="pr-4">
                  <Form.Label>Conta corrente</Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridValue" className="pr-4">
                  <Form.Label>Valor da transferência</Form.Label>
                  <Form.Control type="number"/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridText" className="mb-4 pr-4">
                  <Form.Label>Identificação nos extratos</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Form.Row>
            </Form>
            <Button  variant="success">Continuar</Button>
          
        </Tab>
      </Tabs>
    </Col>
  </>
);

export default AccountPayments;
