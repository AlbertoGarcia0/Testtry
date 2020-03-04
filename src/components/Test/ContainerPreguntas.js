import React, {useRef} from "react"
import '../../assets/css/Test.css'

import {Container, Card, Form, Button, Row, Col, ButtonGroup} from 'react-bootstrap'
import ReactPlaceholder from 'react-placeholder';
import LazyLoad from 'react-lazyload';

import * as JSONRetriever from '../Logic/JSONRetriever'

class PanelPregunta extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      marcada: '',
      correcta: this.props.correcta,
      isCorrecta: false,
      header_bg: '',
      footer_visibility: 'none',
      bloquear_radio: false
    }
    this.onChangeRadio = this.onChangeRadio.bind(this)
    this.corregir = this.corregir.bind(this)
    this.restart = this.restart.bind(this)
    this.isCorrecta = this.isCorrecta.bind(this)
  }

  componentDidMount(){
    this.props.arr_func.push(this.corregir)
    this.props.arr_restart_func.push(this.restart)
  }

  restart(){
    this.setState({
      marcada: '',
      correcta: this.props.correcta,
      isCorrecta: false,
      header_bg: '',
      footer_visibility: 'none',
      bloquear_radio: false})
  }

  corregir(){
    this.setState({footer_visibility:'block', bloquear_radio:true})
    if(this.isCorrecta()){
      this.setState({header_bg:'rgb(28, 162, 0)'})
    }else {
      this.setState({header_bg:'rgb(224, 41, 29)'})
    }
  }

  isCorrecta(){
    if(this.state.marcada==this.state.correcta){
      this.setState({isCorrecta:true})
      return true
    }else {
      this.setState({isCorrecta:false})
      return false
    }
  }

  onChangeRadio(e){
    if(this.state.marcada === ''){
      this.props.actualizarRespondidas.call()
    }
    this.setState({marcada: e.target.value})
  }

  render(){
      const options = this.props.respuestas.map((opcion, index) =>(
          <label key={index}>
            <input
              type="radio"
              value={opcion}
              checked={this.state.marcada === opcion}
              onChange={this.onChangeRadio}
              disabled={this.state.bloquear_radio}
            />
            <span>{opcion}</span>
          </label>
      ), this)
      return(
      <Card id='card_pregunta_test'>
        <Card.Header id='card_pregunta_test_header' style={{background:this.state.header_bg}}>Pregunta {this.props.numero}</Card.Header>
        <Card.Body>
            <p>{this.props.enunciado}</p>
            <Container id='container_respuestas_test'> {options} </Container>
        </Card.Body>
        <Card.Footer style={{display:this.state.footer_visibility }}>
          Respuesta correcta: {this.props.correcta}
        </Card.Footer>
      </Card>
      )
  }
}



class ContainerPreguntas extends React.Component{
  constructor(props){
    super(props)
    this.state={
      ready: false,
      corregido: false
    }
    this.corregir_funct = []
    this.restart_funct = []
  }

  refreshContainer(){
    this.restartPanels()
    this.setState({ready: true})
  }

  restartPanels(){
    for (var i = 0; i < this.corregir_funct.length; i++) {
      this.restart_funct[i].call()
    }
  }

  corregirTest(){
    for (var i = 0; i < this.corregir_funct.length; i++) {
      this.corregir_funct[i].call()
    }
    this.setState({corregido:true})
  }

  render(){
    return(
      <ReactPlaceholder type='text' rows={7} ready={this.state.ready} >
        <Container id='container_preguntas'>
          <Row top="xs">
            <Col id='search_result_container'>
              <LazyLoad once>
                  <React.Fragment>
                   {this.props.estado_padre.preguntas_test.map((pregunta, index)=> (
                     <React.Fragment key={index}>
                       <PanelPregunta
                         arr_func = {this.corregir_funct}
                         arr_restart_func = {this.restart_funct}
                         numero={index}
                         enunciado={pregunta[0].enunciado}
                         respuestas={pregunta[0].respuestas}
                         correcta={pregunta[0].verdadera}
                         actualizarRespondidas={this.props.actualizarRespondidas}/>
                     </React.Fragment>
                   ))}
                 </React.Fragment>
             </LazyLoad>
            </Col>
          </Row>
        </Container>
      </ReactPlaceholder>
    )
  }

}

export default ContainerPreguntas
