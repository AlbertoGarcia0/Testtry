import React from "react"
import '../../assets/css/Dashboard.css';
import logo from '../../assets/img/LogoBig.png';

import {Container, Row, Col} from 'react-bootstrap'

class WebInfo extends React.Component{
  render(){
    return(
      <Container id='web_info_card'>
        <Row>
          <Col>
            <img src={logo} alt="" id='big_logo' />
          </Col>
        </Row>
        <Row>
          <Col  id='block_info'>
            <h1>Atención</h1>
              <p>Testtry es una página donde puedes repetir cuestionarios
              para afianzar conceptos de diferentes asignaturas.</p>
            <p>Como puedes ver, la base de datos de preguntas aún esta muy vacía, y es debido a
              que esta es una aplicación colaborativa, es decir, si compartes tus cuestionarios con otros,
              todos tendran acceso a mas preguntas y, por lo tanto, podran comprobar aún mejor si aprobarán el examen o no. </p>
            <p>Ya te he soltado la chapa, asi que puedes seguir haciendo lo que quieras. </p>
            <p>Doris tu puedes :3</p>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default WebInfo
