import React from "react"
import '../assets/css/Busquedas.css'

import {Container, Row, Col, Form, Card, Button} from 'react-bootstrap'

import ScrollerResultados from './Busquedas/ScrollerResultados'
import FormularioBusquedas from './Busquedas/FormularioBusquedas'

import api_preguntas from '../database/API/preguntas'

function buscarPreguntas(){
  return api_preguntas.Preguntas
}

class Busquedas extends React.Component{
  constructor(props) {
    super(props);
    this.state ={
      resultados: [],
      pulsado_boton_busqueda:true,
      asignatura: '',
      palabras_clave: '',
      tipo_pregunta:''

    }
    this.realizarBusqueda = this.realizarBusqueda.bind(this)
    this.ScrollerResultadosReference = React.createRef()
  }

  realizarBusqueda(){
    console.log('Asignatura: ' + this.state.asignatura + ', palabras_clave: ' + this.state.palabras_clave + ', tipo_pregunta: ' + this.state.tipo_pregunta)
    fetch('../database/API/preguntas')
        .then(res => res.json())
        .then(json => this.setState({ resultados: json }));
    this.ScrollerResultadosReference.current.refreshPreguntasEncontradas()
  }

  render(){
    return(
      <Container id='component_busqueda' fluid='true'>
        <Row top="xs">
          <Col md={4}>
            <FormularioBusquedas realizarBusqueda={this.realizarBusqueda} estado={this.state}/>
          </Col>
          <Col>
              <ScrollerResultados ref={this.ScrollerResultadosReference} estado={this.state}/>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Busquedas
