import React from "react"
import '../../assets/css/Profile.css';

import {Card, Container, Button, Row} from 'react-bootstrap'

import {UserData} from './UserData'


export class Profile extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
    <Container id='profile_container'>
      <UserData user={this.props.user} />
    </Container>
    )
  }
}
