import React from "react"
import '../assets/css/Dashboard.css';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import QuestionPie from './Dashboard/QuestionCountPie.js'
import ImageButton from './Dashboard/ImageButton.js'
import WebInfo from './Dashboard/WebInfo.js'

function readQuestionInfo(){
  var asignaturas = ['Operativos', 'Concurrente', 'Otras', 'funciona']
  var question_count = [200, 40, 388, 200]
  return [asignaturas, question_count]
}

function Dashboard(){
  return(
    <Container id='Dashboard'>
      <Row>
        <Col > <WebInfo/> </Col>
        <Col> <QuestionPie info_asignaturas={readQuestionInfo()} /> </Col>
      </Row>
      <Row>
         <Col md="auto"> <ImageButton title='Colaborar' text='Enviar preguntas.' btn_text='Enviar' /> </Col>
         <Col md="auto"> <ImageButton title='Nuevo Test' text='Realizar nueva prueba.' btn_text='Test'/> </Col>
         <Col md="auto"> <ImageButton title='Repo' text='Enlace al repositorio del proyecto.' btn_text='Github'/> </Col>
      </Row>
    </Container>
  )
}

export default Dashboard
