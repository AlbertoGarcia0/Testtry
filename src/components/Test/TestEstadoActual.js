import React from "react"
import '../../assets/css/Test.css'
import 'rc-time-picker/assets/index.css';

import {Container, Card, Form, Button, Col, Row} from 'react-bootstrap'
import ProgressBar from 'react-customizable-progressbar'



class TimeIndicator extends React.Component{
  constructor(props) {
    super(props);
    this.state ={
      seconds: 20
    }
  }

  render(){
    return(
      <div className="indicator-time">
        <div className="indicator-time_inner">
        Tiempo restante
          <div className="indicator-time_percentage">
          {this.props.percentage}%
          </div>
        </div>
      </div>
    )
  }
}

class QuestionIndicator extends React.Component{
  constructor(props) {
    super(props);
    this.state ={
      seconds: 20
    }
  }

  render(){
    return(
      <div className="indicator-question">
        <div className="indicator-question_inner">
        Preguntas respondidas
          <div className="indicator-question_percentage">
            {this.props.respondidas}/{this.props.preguntas_total}
          </div>
        </div>
      </div>
    )
  }
}

class EstadoTest extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      progress_tiempo: 0,
      progress_preguntas_respondidas: 0
    }
    this.updateEstadoTest = this.updateEstadoTest.bind(this)
  }

  updateEstadoTest(){
    let respondidas = this.props.estado_padre.preguntas_respondidas + 1
    let total = this.props.estado_padre.num_preguntas
    let percentage = (respondidas/total)*100
    this.setState({progress_preguntas_respondidas: percentage})
  }

  resetEstado(){
    this.setState({
      progress_tiempo: 0,
      progress_preguntas_respondidas: 0
    })
  }

  render(){
    return(
      <Card id='test_estado'>
          <Card.Body id='test_estado_body'>
            <Container id='container_test_estado' >
                  <ProgressBar id='progress_bar'
                    radius={100} progress={this.state.progress_preguntas_respondidas} cut={120} rotate={-210} strokeWidth={16}
                    strokeColor="#5d9cec" strokeLinecap="square" trackStrokeWidth={8} trackStrokeColor="#e6e6e6"
                    trackStrokeLinecap="square" pointerRadius={0} initialAnimation={true} transition="all 0.5s cubic-bezier(.5,.96,.72,1.1) 0s"
                    trackTransition="0s ease">
                      <QuestionIndicator
                        respondidas={this.props.estado_padre.preguntas_respondidas}
                        preguntas_total={this.props.estado_padre.num_preguntas}/>
                  </ProgressBar>
                  <ProgressBar id='time_bar'
                    radius={100} progress={this.state.progress_tiempo} strokeWidth={3} strokeColor="indianred"
                    trackStrokeWidth={3} trackStrokeColor="#e6e6e6" pointerRadius={5} pointerFill="white"
                    pointerStrokeWidth={2} pointerStrokeColor="indianred">
                    <TimeIndicator
                      percentage={this.state.progress_tiempo}/>
                  </ProgressBar>
            </Container>
          </Card.Body>
        </Card>
    )
  }
}

export default EstadoTest
