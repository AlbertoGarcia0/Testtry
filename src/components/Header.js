import React from "react"
import '../assets/css/Header.css';
import logo from '../assets/img/Logo.png';
import no_profile from '../assets/img/no_profile.png'

import {Navbar, Nav, Button} from 'react-bootstrap'
import Fade from 'react-reveal/Fade';
import {Switch, Route, Redirect} from "react-router-dom";

import firebase from 'firebase'

import Dashboard from './Dashboard'
import Test from './Test'
import Busquedas from './Busquedas'
import NotFoundView from './NotFound'
import Profile from './Profile'

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
      log_button_dst: null,
      url_profile_img: no_profile
    }
    this.updateUserLogged = this.updateUserLogged.bind(this)
    this.startAuthentication = this.startAuthentication.bind(this)
    this.logOut = this.logOut.bind(this)

    this.props.firebase_auth.onAuthStateChanged(function(user) {
      this.setState({ user: user })
      this.updateUserLogged()
    });
  }

  async componentDidMount(){
    await this.updateUserLogged()
  }

  updateUserLogged(){
    console.log(this.state.user)
    if(this.state.user != null){
      this.setState({
        url_profile_img: this.props.firebase_auth.currentUser.photoURL,
        log_button_text: 'Log Out',
        log_button_dst: this.logOut,
        autenticado: true
      })
    }else{
      this.setState({
        url_profile_img: no_profile,
        log_button_text: 'Log In',
        log_button_dst: this.startAuthentication,
        autenticado: false
      })
    }
  }

  startAuthentication(){
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    this.props.firebase_auth.setPersistence(firebase.auth.Auth.Persistence.NONE)
    .then(function() {
      return this.props.firebase_auth.signInWithPopup(googleAuthProvider);
    })
    .catch(function(error) {
    });

    this.updateUserLogged()
  }

  async logOut(){
      await this.props.firebase_auth.signOut()
      this.updateUserLogged()
      alert('adis')
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
          <a href='#/profile'>
            <img   
              className='profile_image' 
              src={this.state.url_profile_img} 
              style={{width:'3rem'}}
              />
          </a>
          <Button className='login_button' onClick={this.state.log_button_dst}> {this.state.log_button_text} </Button>
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
