import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import i1 from './image/car.jpg'
import Row from 'react-bootstrap/Row';


export default function Blog() {
  return (
  
  
    <Container>
    <Row>
      <Col xs={6} md={4}>
        <img src={i1} rounded />
      </Col>
 
    </Row>
  </Container>
  )
} 
