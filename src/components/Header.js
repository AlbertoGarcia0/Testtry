import React from "react"
import '../assets/css/Header.css';
import logo from '../assets/img/Logo.png';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Fade from 'react-reveal/Fade';
import {Switch, Route, Link, Redirect} from "react-router-dom";

import Dashboard from './Dashboard'
import Preguntas from './Preguntas'
import NotFoundView from './NotFound'

function notFound(){
  return(
    <Fade>
      <NotFoundView/>
    </Fade>
  )
}

const dashboard_view = (
  <div>
    <Fade>
      <Dashboard/>
    </Fade>
  </div>
)

function Header(){
  return(
    <div id="inicio">
       <Navbar collapseOnSelect expand="lg" fixed="top" id='navbar'>
         <Navbar.Brand id='navbar'>
           <img src={logo} style={{ width: '40px'}}/>
           Testtry
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
           <Nav className="mr-auto" >
             <Nav.Link as={Link} to='/' classID='.nav-link'>Inicio</Nav.Link>
             <Nav.Link as={Link} to='/Preguntas'>Preguntas</Nav.Link>
             <Nav.Link as={Link} to='/404'>404</Nav.Link>
           </Nav>
         <Form inline>
            <Button id='standard_button'>Nuevo test +</Button>
          </Form>
         </Navbar.Collapse>
       </Navbar>

       <Switch>
         <Route exact path="/"> {dashboard_view}</Route>
         <Route path="/Preguntas"> <Fade> <Preguntas/> </Fade></Route>
         <Route path="/404" component={notFound}/>
         <Redirect to="/404" />
      </Switch>
     </div>
  )
}


export default Header
