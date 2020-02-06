import React from "react"
import '../assets/css/Busquedas.css';

import {Container, Row, Col} from 'react-bootstrap'
import FormBusqueda from './Busquedas/FormBusquedas'
import SearchResult from './Busquedas/SearchResult'


class Busquedas extends React.Component{

  render(){
    return(
      <Container id='component_busqueda' fluid='true'>
        <Row top="xs">
          <Col md={4}>
              <FormBusqueda />
          </Col>
          <Col>
              <SearchResult />
          </Col>
        </Row>
      </Container>
    )
  }

}

export default Busquedas
