import React from "react"
import '../../assets/css/Dashboard.css';
import "react-placeholder/lib/reactPlaceholder.css";

import {Container, Row, Col} from 'react-bootstrap'
import ReactPlaceholder from 'react-placeholder';

import QuestionPie from './QuestionCountPie.js'
import ImageButton from './ImageButton.js'
import WebInfo from './WebInfo.js'
import * as JSONRetriever from '../Logic/JSONRetriever'

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


export class Dashboard extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      ready: false,
      info_asignaturas: [[],[]]
    }
  }

  async componentDidMount(){
    window.scrollTo(0, 0)
    this.setState({info_asignaturas:await readQuestionInfo()})
    this.setState({ready: true})
  }

  render(){
    return(
      <Container id='dashboard'>
          <Container id='info_container' >
            <WebInfo/>
            <Container id='card_pie_container' >
              <ReactPlaceholder type='media' rows={7} ready={this.state.ready}>
                <QuestionPie info_asignaturas={this.state.info_asignaturas} />
              </ReactPlaceholder>
            </Container >
          </Container>
          <Container id='image_button_container'>
            <ImageButton
              title='Colaborar'
              text='Enviar preguntas.'
              btn_text='Enviar'
              hrefer={'#/colaborar'} /> 
            <ImageButton
              title='Nuevo Test'
              text='Realizar nueva prueba.'
              btn_text='Test'
              hrefer={'#/test'}/> 
            <ImageButton
              title='Repo'
              text='Enlace al repositorio.'
              btn_text='Github'
              hrefer={'https://github.com/eduardez/Testtry/tree/master'}
              targt={'_blank'}/>
            </Container>
      </Container>
    )
  }
}


