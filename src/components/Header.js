import React from "react"
import '../assets/css/Header.css';
import logo from '../assets/img/Logo.png';

import {Navbar, Nav, Form, Button} from 'react-bootstrap'
import Fade from 'react-reveal/Fade';
import {Switch, Route, Link, Redirect} from "react-router-dom";

import Dashboard from './Dashboard'
import Test from './Test'
import Busquedas from './Busquedas'
import NotFoundView from './NotFound'
import viewPageGA from './Statics'

function notFound(){
  viewPageGA('404')
  return(
    <Fade>
      <NotFoundView/>
    </Fade>
  )
}

function dashboard_view(){
  viewPageGA('Dashboard')
  return(
      <Fade>
        <Dashboard/>
      </Fade>
  )
}

function busqueda_view(){
  viewPageGA('Busquedas')
  return(
      <Fade>
        <Busquedas/>
      </Fade>
  )
}

function test_view(){
  viewPageGA('Test')
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
         <Navbar.Brand id='navbar' href='#/'>
           <img src={logo} style={{ width: '40px'}}/>
           Testtry
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
           <Nav className="mr-auto" >
             <Nav.Link href='#/'>Inicio</Nav.Link>
             <Nav.Link href='#/busqueda'>Busqueda</Nav.Link>
             <Nav.Link href='#/test'>Nuevo test</Nav.Link>
             <Nav.Link href='#/about'>About</Nav.Link>
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
