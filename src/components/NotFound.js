import React from "react"
import '../assets/css/NotFound.css';

import {Card, Container, Button, Row} from 'react-bootstrap'



function get_gato(){
  fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(images => {
        try{
          document.querySelector('#cat_image').src = images[0].url
        }catch(error){

        }
    })
}


class NotFoundView extends React.Component {
  constructor(props) {
    super(props)
    get_gato()
  }

  render(){
    return(
      <Container id='not_found_container'>
        <Card id='card_notfound' style={{ width: '48rem', margin: '10vh'}}>
          <Card.Header>404 Not Found </Card.Header>
            <Card.Img  id='cat_image'/>
            <Card.Body>
              <Card.Text>
                La página a la que has intentado acceder no esta disponible, pero aqui tienes un gato (via <a href='https://thecatapi.com/' target='_blank'>thecatapi</a>).
              </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button
              id='standard_button_form'
              href={' '}
              style={{width: '10vw', margin: 'auto'}}>Inicio</Button>
          </Card.Footer>
        </Card>
    </Container>
    )
  }
}

export default NotFoundView
