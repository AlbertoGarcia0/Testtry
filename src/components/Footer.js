import React from "react"
import logo from '../assets/img/logo.jpg';
import '../assets/css/Footer.css';

import Image from 'react-bootstrap/Image'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Navbar from 'react-bootstrap/Navbar'

const EduardezInfoPopover = (
  <Popover id="popover-info">
    <Popover.Title as="h3">Eduardez</Popover.Title>
    <Popover.Content>
      <p>
        A ver, la pagina esta la uso para tener ejemplos de librerias
        que me molan. Este overlay por ejemplo esta sacado de la libreria
        de bootstrap, luego el menu de otra.
        Ire poniendo los nombres de cada una.
      </p>
      <p>
        Enlace a mi
        <a href="https://www.github.com/eduardez" target="_blank"> <strong>GitHub</strong></a>
      </p>
    </Popover.Content>
  </Popover>
);

const EduardezLogo = (
    <OverlayTrigger
      trigger="click"
      placement="right"
      overlay={EduardezInfoPopover}
      rootClose={true}>
        <Image src={logo} className="big-logo" rounded />
    </OverlayTrigger>
)

function Footer(){
  return(
    <footer className="about">
      <Navbar bg="dark" variant="dark" fixed="sticky-bottom">
        <Navbar.Brand href="#Eduardez"> {EduardezLogo}</Navbar.Brand>
      </Navbar>
    </footer>



      )
}


export default Footer
