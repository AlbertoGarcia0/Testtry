import React from "react"
import '../../assets/css/Test.css'
import "nouislider/distribute/nouislider.css";

import {Container, Card, Form, Button} from 'react-bootstrap'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import ReactPlaceholder from 'react-placeholder';
import TimePicker from 'rc-time-picker';
import Nouislider from "nouislider-react";
import { ToastContainer, toast } from 'react-toastify';

import * as JSONRetriever from '../Logic/JSONRetriever'
import ModalPreguntas from './modalPreguntasAcertadas'

toast.configure()

async function getAsignaturas(){
  let asig = await JSONRetriever.getAllNamesAsignaturas()
  let array_asig = []
  for (var i = 0; i < asig.length; i++) {
    array_asig.push({value:asig[i], label: asig[i]})
  }
  return array_asig
}


class FormularioTest extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      test_state: 0,
      asignaturas_disponibles: [],
      t_limite: [0,0],
      num_preguntas:0,
      label_button_test: 'Comenzar',
      show_modal: false,
      ready: false,
      config_set: false
    }
    this.setTime = this.setTime.bind(this);
    this.setAsignatura = this.setAsignatura.bind(this);
    this.startTest = this.startTest.bind(this);
    this.setNumPreguntas = this.setNumPreguntas.bind(this);
  }

  async componentDidMount(){
      this.setState({asignaturas_disponibles: await getAsignaturas()})
      this.setState({ready: true})
  }

  setTime(e){
    if(e!=null){
      let arr_tiempo = [e._d.getHours(), e._d.getMinutes()]
      this.setState({t_limite: arr_tiempo})
    }else{
      let arr_tiempo = [0,0]
      this.setState({t_limite: arr_tiempo})
    }
  }

  setAsignatura(e){
    this.props.estado_padre.asignatura=e.value
    if(this.state.num_preguntas != 0){
      this.setState({config_set: true})
    }
  }

  setNumPreguntas(e){
    let num_preg_int = parseInt(e[0], 10)
    this.props.estado_padre.num_preguntas=num_preg_int
    this.setState({num_preguntas:num_preg_int})
    if(this.props.estado_padre.asignatura != ''){
      this.setState({config_set: true})
    }
  }

  startTest(){
    if(this.state.test_state == 0){
      this.setState({label_button_test: 'Finalizar', test_state:1})
      this.props.start_test.call()
      document.getElementById("test_start_button").style.background='rgb(224, 41, 29)';
      document.getElementById("test_start_button").style.border='rgb(224, 41, 29)';
      document.getElementById("test_start_button").style.color='rgb(255, 255, 255)';
      toast("Mirame MIRAME, SOY TU FUTURO!!",{ type:"info"});

    }else if (this.state.test_state == 1) {
      this.setState({label_button_test: 'Comenzar', test_state:0})
      this.props.corregir.call()
      document.getElementById("test_start_button").style.background='#FDD036';
      document.getElementById("test_start_button").style.border='#FDD036';
      document.getElementById("test_start_button").style.color='#292929';
      toast("Ay dios mio QUE CALVARIO, QUE NO DOY UNA!",{ type:"info"});
    }else {
      console.log('Que mierdas ha pasado aqui.');
    }
  }

  render(){
    const animatedComponents = makeAnimated();
    return(
      <Card>
        <Card.Header id='card_header'>Opciones</Card.Header>
          <Card.Body id='busqueda_card_body'>
            <Container id='busqueda_card_body_container' fluid='true'>
              <ReactPlaceholder type='text' rows={7} ready={this.state.ready} >
                <Select id='form_element_dropdown' options={this.state.asignaturas_disponibles}
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  placeholder='Seleccionar asignaturas'
                  onChange={this.setAsignatura}/>

                <TimePicker
                   id='form_element'
                   placeholder = 'Tiempo limite (vacio = sin tiempo limite)'
                   format = '[Tiempo limite:] HH[h, ] mm[m ]'
                   showSecond={false}
                   minuteStep={5}
                   placement={'bottomRight'}
                   onChange={this.setTime}/>

                 <label id='form_element'>Numero de preguntas: {this.state.num_preguntas}</label>
                 <Nouislider id='form_element'
                  start={[27]}
                  connect={[true, false]}
                  pips={{ mode: 'count', values: 10 }}
                  clickablePips
                  onSet={this.setNumPreguntas}
                  range={{
                    min: 5,
                    max: 50,
                  }}/>

                <Button
                  onClick={this.startTest}
                  id='test_start_button'
                  disabled={!this.state.config_set}>
                  {this.state.label_button_test}</Button>

              </ReactPlaceholder>
            </Container>
          </Card.Body>
        </Card>
    )
  }
}

export default FormularioTest
