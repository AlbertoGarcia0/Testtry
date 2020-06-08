import React from "react"
import '../../assets/css/Profile.css';

import {Card, Container, Button, Row} from 'react-bootstrap'

import {UserData} from './UserData'
import {UserControlPanel} from './UserControlPanel'
 

export class Profile extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
    <Container id='profile_container'>
      <UserData user={this.props.user} />
      <UserControlPanel user={this.props.user}/>
    </Container>
    )
  }
}
