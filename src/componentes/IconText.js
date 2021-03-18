import React from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconText = ({
  icon,
  size = 1,
  color = "#000",
  className = "",
  textClassname = "",
  children,
  onClick
}) => (
  <Row className={`d-flex align-items-center ${className}`} onClick={onClick}>
    <Col xs={size} className="d-flex justify-content-center">
      <FontAwesomeIcon 
      icon={icon} 
      size={`${size}x`} 
      color={color} 
      />
    </Col>
    <Col xs={11 - size} className={textClassname}>
      {children}
    </Col>
  </Row>
);

export default IconText;
