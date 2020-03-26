import React from "react"
import '../assets/css/Header.css';
import logo from '../assets/img/Logo.png';

import {Navbar, Nav} from 'react-bootstrap'
import Fade from 'react-reveal/Fade';
import {Switch, Route, Redirect} from "react-router-dom";

import Dashboard from './Dashboard'
import Test from './Test'
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

function test_view(){
  return(
      <Fade>
        <Test/>
      </Fade>
  )
}

function Header(){
  return(
    <div id="inicio">
       <Navbar collapseOnSelect expand="lg" fixed="top" id='navbar'>
         <Navbar.Brand id='navbar_logo' href='#/'>
           <img src={logo} style={{ width: '40px'}}/>
           Testtry
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
           <Nav className="mr-auto" >
             <Nav.Link href='#/'>Inicio</Nav.Link>
             <Nav.Link href='#/test'>Test</Nav.Link>
             <Nav.Link href='#/busqueda'>Busqueda</Nav.Link>
             <Nav.Link href='#/colaborar'>Colaborar</Nav.Link>
             <Nav.Link href='#/404'>404</Nav.Link>
           </Nav>
         </Navbar.Collapse>
       </Navbar>
       <Switch>
         <Route exact path="/" component={dashboard_view}/>
         <Route exact path="/test" component={test_view}/>
         <Route path="/busqueda" component={busqueda_view}/>
         <Route path="/404" component={notFound}/>
         <Redirect to="/404" />
      </Switch>
     </div>
  )
}


export default Header
