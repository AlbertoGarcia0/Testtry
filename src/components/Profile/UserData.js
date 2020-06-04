import React from "react"
import '../../assets/css/Profile.css';

import {Card, Container, Button, Row} from 'react-bootstrap'



export class UserData extends React.Component {
  constructor(props) {
    super(props)

  }

  render(){
    return(
    <Container id='user_data_container'>
        <h1>Página de perfil</h1>
        <p>Aun está en construcción</p>
        <img  src={this.props.user.photoURL}  />
        <p>Nombre: {this.props.user.displayName}</p>
        <p>Email: {this.props.user.email}</p>

    </Container>
    )
  }
}