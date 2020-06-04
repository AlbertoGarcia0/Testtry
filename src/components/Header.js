import React from "react"
import '../assets/css/Header.css';
import logo from '../assets/img/Logo.png';
import no_profile from '../assets/img/no_profile.png'

import {Navbar, Nav, Button, Container} from 'react-bootstrap'
import Fade from 'react-reveal/Fade';
import {Switch, Route, Redirect} from "react-router-dom";

import {FB_Authentication, FB_isUserLogged, FB_getCurrUser} from './Firebase'

import {Dashboard} from './Dashboard/index'
import {Test} from './Test/index'
import {Busquedas} from './Busquedas/index'
import NotFoundView from './NotFound'
import {Profile} from './Profile/index'

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

function profile_view(){
  return(
      <Fade>
        <Profile/>
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

class Header extends React.Component{
  constructor(props){
    super(props)
    this.state={
      user_logged: false,
      user: null,
      log_button_text: 'Log In',
      url_profile_img: no_profile
    }
    this.startAuth = this.startAuth.bind(this)
    this.updateUserData = this.updateUserData.bind(this)

  }

  async componentDidMount(){
    //Listener para cuando el usuario logea o desloguea
    const self = this
    this.props.firebase_auth.onAuthStateChanged((user) => {
      if (user) {
        self.setState({user: user})
        self.updateUserData(true)
      } else {
        self.updateUserData(false)
      }
    });
  }

  async startAuth(){
    const is_logged = await FB_Authentication(this.state.user_logged, this.props.firebase_auth)
    this.updateUserData(is_logged)
  }

  async updateUserData(is_logged){
    if(is_logged){
      const user = await FB_getCurrUser(this.props.firebase_auth)
      this.setState({
        url_profile_img: user.photoURL,
        log_button_text: 'Log Out',
        user_logged: true
      })
    }else{
      this.setState({
        url_profile_img: no_profile,
        log_button_text: 'Log In',
        user_logged: false
      })
    }
  }
  
  render(){
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
          <Container id='profile_login_container'>
            <a href='#/profile'>
              <img   
                id='profile_image' 
                src={this.state.url_profile_img} 
                style={{width:'3rem'}}
                />
            </a>
            <Button id='login_button' onClick={this.startAuth}> {this.state.log_button_text} </Button>
          </Container>
         </Navbar.Collapse>
       </Navbar>
       <Switch>
         <Route exact path="/" component={dashboard_view}/>
         <Route exact path="/test" component={test_view}/>
         <Route path="/busqueda" component={busqueda_view}/>
         <Route path="/profile" component={profile_view}/>
         <Route path="/404" component={notFound}/>
         <Redirect to="/404" />
      </Switch>
     </div>
  )
    }
}


export default Header
