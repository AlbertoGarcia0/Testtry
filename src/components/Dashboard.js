import React from "react"
import '../assets/css/Dashboard.css';
import "react-placeholder/lib/reactPlaceholder.css";

import {Container, Row, Col} from 'react-bootstrap'
import ReactPlaceholder from 'react-placeholder';

import QuestionPie from './Dashboard/QuestionCountPie.js'
import ImageButton from './Dashboard/ImageButton.js'
import WebInfo from './Dashboard/WebInfo.js'
import * as JSONRetriever from './Logic/JSONRetriever'

async function readQuestionInfo(){
  let asig = await JSONRetriever.getAllAsignaturas()
  var asignaturas = []
  var question_count = []
  for (var i = 0; i < asig.length; i++) {
    asignaturas.push(asig[i].nombre_categoria)
    question_count.push(asig[i].numero_preguntas)
  }
  console.log(asignaturas);
  return [asignaturas, question_count]
}


class Dashboard extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      info_asignaturas: [[],[]]
    }
  }
  async componentDidMount(){
    this.setState({info_asignaturas:await readQuestionInfo()})
    this.setState({ready: true})
  }

  render(){
    return(
      <Container id='Dashboard'>
        <Row>
          <Col > <WebInfo/> </Col>
          <Col>
            <ReactPlaceholder type='media' rows={7} ready={this.state.ready}>
              <QuestionPie info_asignaturas={this.state.info_asignaturas} />
            </ReactPlaceholder>
         </Col>
        </Row>
        <Row>
           <Col md="auto"> <ImageButton
             title='Colaborar'
             text='Enviar preguntas.'
             btn_text='Enviar'
             hrefer={'#/colaborar'} /> </Col>
           <Col md="auto">
             <ImageButton
               title='Nuevo Test'
               text='Realizar nueva prueba.'
               btn_text='Test'
               hrefer={'#/test'}/> </Col>
           <Col md="auto">
             <ImageButton
               title='Repo'
               text='Enlace al repositorio.'
               btn_text='Github'
               hrefer={'https://github.com/eduardez/Testtry/tree/master'}
               targt={'_blank'}/> </Col>
        </Row>
      </Container>
    )
  }
}

export default Dashboard
