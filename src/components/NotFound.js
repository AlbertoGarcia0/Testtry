import React from "react"

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'



function get_gato(){
  fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(images => {
          document.querySelector('img').src = images[0].url
    })
}


class NotFoundView extends React.Component {
  constructor(props) {
    super(props)
    get_gato()
  }

  render(){
    return(
      <div className="container h-100" >
        <div className="row h-100 justify-content-center align-items-center">
          <Card style={{ width: '48rem', margin: '10vh'}}>
            <Card.Header>404 Not Found</Card.Header>
              <Card.Img variant="top" id='cat_image'/>
              <Card.Body>
                <Card.Text>
                  La página a la que has intentado acceder no esta disponible, pero aqui tienes un gato.
                </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    )
  }
}

export default NotFoundView
