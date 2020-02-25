import React from "react"
import '../assets/css/Busquedas.css'

import {Container, Row, Col, Form, Card, Button} from 'react-bootstrap'

import ScrollerResultados from './Busquedas/ScrollerResultados'
import FormularioBusquedas from './Busquedas/FormularioBusquedas'
import * as JSONRetriever from './Busquedas/JSONRetriever'

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

  async realizarBusqueda(){
    const data = await JSONRetriever.buscarPreguntas(this.state.asignatura, this.state.palabras_clave, this.state.tipo_pregunta)
    this.setState({resultados: data.Preguntas})
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
