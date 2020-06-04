import React from "react"
import '../../assets/css/Test.css'

import {Container, Col, Row} from 'react-bootstrap'

import FormularioTest from './TestConfig'
import EstadoTest from './TestEstadoActual'
import ContainerPreguntas from './/ContainerPreguntas'

import * as JSONRetriever from '../Logic/JSONRetriever'

export class Test extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      config_set: false,
      num_preguntas: '-',
      preguntas_respondidas: '-',
      tiempo_total: 0,
      asignatura: '',
      preguntas_test: []
    }
    this.startTest = this.startTest.bind(this);
    this.corregirTest = this.corregirTest.bind(this);
    this.actualizarRespondidas = this.actualizarRespondidas.bind(this)
    this.PanelPreguntaReference = React.createRef()
    this.PanelEstadoReference = React.createRef()
  }

  async startTest(){
    let res_preguntas_test = await JSONRetriever.getPreguntasTest(this.state.num_preguntas, this.state.asignatura)
    this.setState({
      preguntas_test: res_preguntas_test,
      preguntas_respondidas: 0
      })
    this.setState({config_set:true})
    this.PanelPreguntaReference.current.refreshContainer()
    this.actualizarRespondidas = this.actualizarRespondidas.bind(this)
    this.PanelEstadoReference.current.resetEstado()
  }

  corregirTest(){
    this.PanelPreguntaReference.current.corregirTest()
  }
  
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  actualizarRespondidas(){
    this.setState({preguntas_respondidas: this.state.preguntas_respondidas + 1})
    this.PanelEstadoReference.current.updateEstadoTest()
  }

  render(){
    return(
        <Container id='component_test' fluid='true'>
          <Row top="xs">
            <Col md={4} id='test_card_options'>
              <FormularioTest id='test_config'
                estado_padre={this.state}
                start_test={this.startTest}
                corregir={this.corregirTest}/>
              <EstadoTest
                ref={this.PanelEstadoReference}
                estado_padre={this.state}/>
            </Col>
            <Col md={4}>
                <ContainerPreguntas
                  ref={this.PanelPreguntaReference}
                  estado_padre={this.state}
                  actualizarRespondidas={this.actualizarRespondidas}
                  />
            </Col>
          </Row>
        </Container>
    )
  }
}

