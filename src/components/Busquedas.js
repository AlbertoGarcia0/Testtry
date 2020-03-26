import React from "react"
import '../assets/css/Busquedas.css'

import {Container, Row, Col} from 'react-bootstrap'

import ScrollerResultados from './Busquedas/ScrollerResultados'
import FormularioBusquedas from './Busquedas/FormularioBusquedas'
import * as JSONRetriever from './Logic/JSONRetriever'

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
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  async realizarBusqueda(){
    let split_palabras
    try {
      split_palabras = this.state.palabras_clave.split(' ')
    } catch (e) {
      var text = document.getElementById("form_element_palabras_clave").value
      split_palabras = text.split(' ')
    }
    this.setState({palabras_clave: split_palabras})
    const data = await JSONRetriever.buscarPreguntas(this.state.asignatura, split_palabras)
    this.setState({resultados: data})
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
