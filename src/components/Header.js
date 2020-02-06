import React from "react"
import '../assets/css/Header.css';
import logo from '../assets/img/Logo.png';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Fade from 'react-reveal/Fade';
import {Switch, Route, Link, Redirect} from "react-router-dom";

import Dashboard from './Dashboard'
import Busquedas from './Busquedas'
import NotFoundView from './NotFound'

function notFound(){
  return(
    <Fade>
      <NotFoundView/>
    </Fade>
  )
}

function dashboard_view(){
  return(
      <Fade>
        <Dashboard/>
      </Fade>
  )
}

function busqueda_view(){
  return(
      <Fade>
        <Busquedas/>
      </Fade>
  )
}

function Header(){
  return(
    <div id="inicio">
       <Navbar expand="lg" fixed="top" id='navbar'>
         <Navbar.Brand id='navbar'>
           <img src={logo} style={{ width: '40px'}}/>
           Testtry
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
           <Nav className="mr-auto" >
             <Nav.Link as={Link} to='/' >Inicio</Nav.Link>
             <Nav.Link as={Link} to='/busqueda'>Busqueda</Nav.Link>
             <Nav.Link as={Link} to='/404'>404</Nav.Link>
           </Nav>
           <Form inline id='form_header_buttons'>
             <Button id='standard_button'>Nuevo test</Button>
           </Form>
         </Navbar.Collapse>
       </Navbar>

       <Switch>
         <Route exact path="/" component={dashboard_view}/>
         <Route path="/busqueda" component={busqueda_view}/>
         <Route path="/404" component={notFound}/>
         <Redirect to="/404" />
      </Switch>
     </div>
  )
}


export default Header
