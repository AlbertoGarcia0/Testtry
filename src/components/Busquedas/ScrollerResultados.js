import React from "react"
import '../../assets/css/Busquedas.css'

import {Row, Col, Container, Card} from 'react-bootstrap'
import LazyLoad from 'react-lazyload';

class CardPregunta extends React.Component{
  constructor(props){
    super(props)

  }

  render(){
    return(
    <Card border="success">
      <Card.Header>pregunta num {this.props.numero}</Card.Header>
      <Card.Body>
        <Card.Title>Success Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk
          of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    )
  }
}


class ScrollerResultados extends React.Component{
  constructor(props){
    super(props)
    this.state={
      numero_preguntas_encontradas: 0,
      array_card_preguntas: [],
      adding_components: false
    }
  }

  refreshPreguntasEncontradas(){
    this.state.adding_components=true
    var num_resultados = this.props.estado.resultados.length
    this.setState({numero_preguntas_encontradas: num_resultados})
    var array_preguntas_aux = []
    for (var i = 0; i <= 1020; i++) {
    	array_preguntas_aux.push(<CardPregunta numero={i} key={"pregunta-" + i} />);
    }
    console.log(array_preguntas_aux)
    this.setState({array_card_preguntas: array_preguntas_aux})
    this.state.adding_components=false

  }

  render(){
    return(
      <Card id='search_result_card'>
        <Card.Header id='card_header' > Resultados:  {this.state.numero_preguntas_encontradas}</Card.Header>
        <Card.Body id='card_body_result_container'>
          <Container fluid='true'>
            <Row top="xs">
              <Col id='search_result_container'>
                  <LazyLoad once>
                    <React.Fragment>
                     {this.state.array_card_preguntas.map(pregunta => (
                       <React.Fragment key={pregunta.props.numero}>
                         <CardPregunta numero={pregunta.props.numero}/>
                       </React.Fragment>
                     ))}
                   </React.Fragment>
                 </LazyLoad>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    )
  }
}

export default ScrollerResultados
