import React from "react"
import '../../assets/css/Busquedas.css';

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

function FormBusqueda(){

  return(
    <Card>
      <Card.Header>Busqueda de preguntas en la BBDD</Card.Header>
      <Card.Body>
        <Form id='search_form'>
          <Container id='form_container'>
              <Form.Control placeholder="Tag 1" id='form_element'/>
              <Form.Control placeholder="Asignatura" id='form_element'/>
              <Form.Control placeholder="Asignatura" id='form_element'/>
              <Form.Control placeholder="Asignatura" id='form_element'/>
          </Container>
        </Form>
        <Button variant="primary" id='form_element'>Buscar</Button>
      </Card.Body>
    </Card>

  )
}

export default FormBusqueda
