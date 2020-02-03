

import React from "react"
import '../assets/css/NotFound.css';

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'



function get_gato(){
  fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(images => {
          document.querySelector('#cat_image').src = images[0].url
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
        <div className="row h-100 justify-content-center align-items-center">
          <Card style={{ width: '48rem', margin: '10vh'}}>
            <Card.Header>404 Not Found</Card.Header>
              <Card.Img  id='cat_image'/>
              <Card.Body>
                <Card.Text>
                  La página a la que has intentado acceder no esta disponible, pero aqui tienes un gato.
                </Card.Text>
            </Card.Body>
          </Card>
      </div>
    </Container>
    )
  }
}

export default NotFoundView
