import React from "react";
import { Col, Table } from "react-bootstrap";


const AccountHistory = ({ data }) => {
    const { history } = data;

    return (
        <Col xs={12} lg={8} className="mt-lg-5 pt-lg-5">
            <h3 className="mt-4">Extrato de conta corrente</h3>
            <Table striped borderless>
            <thead>
                <tr>
                  <th>Data</th>
                  <th>Descrição</th>
                  <th>Valor</th>
                  <th>Saldo</th>
                </tr>
              </thead>
              <tbody>
                
                {history.map(({ date, description, value, balance }) => (
                    <tr>
                        <td>{date}</td>
                        <td>{description}</td>
                        <td className="text-danger">{value}</td>
                        <td className="d-none">{balance}</td>
                  </tr>
                ))}
              </tbody>

            </Table>
        </Col>
    )
};

export default AccountHistory;
