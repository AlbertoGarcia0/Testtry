import React from "react"
import '../../assets/css/Busquedas.css'

import {Container, Card, Form, Button} from 'react-bootstrap'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import ReactPlaceholder from 'react-placeholder';

import * as JSONRetriever from '../Logic/JSONRetriever'

async function getAsignaturas(){
  let asig = await JSONRetriever.getAllNamesAsignaturas()
  let array_asig = []
  for (var i = 0; i < asig.length; i++) {
    array_asig.push({value:asig[i], label: asig[i]})
  }
  return array_asig
}


class FormularioBusquedas extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      asignaturas_disponibles: [],
      palabras_busqueda: [],
      ready: false
    }
    this.changeAsignatura = this.changeAsignatura.bind(this);
    this.changePalabrasClave = this.changePalabrasClave.bind(this);

  }

  async componentDidMount(){
      this.setState({asignaturas_disponibles: await getAsignaturas()})
      this.setState({ready: true})

  }

  changeAsignatura(e){
    this.props.estado.asignatura = e.value
  }

  changePalabrasClave(e){
    this.props.estado.palabras_clave = e.target.value
  }

  render(){
    const animatedComponents = makeAnimated();
    return(
      <Card>
        <Card.Header id='card_header'>Busqueda de preguntas en la BBDD</Card.Header>
          <Card.Body id='busqueda_card_body'>
            <Container id='busqueda_card_body_container' fluid='true'>
              <ReactPlaceholder type='text' rows={7} ready={this.state.ready} >

              <Select id='form_element'
                options={this.state.asignaturas_disponibles}
                closeMenuOnSelect={false}
                components={animatedComponents}
                placeholder='Seleccionar asignatura'
                onChange={this.changeAsignatura}/>


              <Form.Control
                ref='form_asignatura'
                placeholder="Palabras clave"
                id='form_element_palabras_clave'
                onChange={this.changePalabrasClave}/>

              <Button
                onClick={this.props.realizarBusqueda}
                id='standard_button_form' >Buscar</Button>

              </ReactPlaceholder>
            </Container>
          </Card.Body>
        </Card>
    )
  }
}

export default FormularioBusquedas
