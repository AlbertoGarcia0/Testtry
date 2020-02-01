import React from "react"
import '../assets/css/Header.css';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
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

function Header(){
  return(
    <div id="inicio">
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
         <Navbar.Brand >Testtry</Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
           <Nav className="mr-auto">
             <Nav.Link as={Link} to='/'>Dashboard</Nav.Link>
             <Nav.Link as={Link} to='/Preguntas'>Preguntas</Nav.Link>
             <Nav.Link as={Link} to='/404'>404</Nav.Link>
           </Nav>
         </Navbar.Collapse>
       </Navbar>
       <Switch>
         <Route exact path="/"> <Fade> <Dashboard/> </Fade></Route>
         <Route exact path="/Preguntas"> <Fade> <Preguntas/> </Fade></Route>
         <Route path="/404" component={notFound}/>
         <Redirect to="/404" />
      </Switch>
     </div>
  )
}


export default Header
