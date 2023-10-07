import React from "react"
import logo from '../assets/img/logo.jpg';
import '../assets/css/Footer.css';

import Image from 'react-bootstrap/Image'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import Navbar from 'react-bootstrap/Navbar'

const EduardezInfoPopover = (
  <Popover id="popover-info">
    <Popover.Title as="h3">Eduardez y Kolsak</Popover.Title>
    <Popover.Content>
      <p>
        <a href="https://www.github.com/albertogarcia0" target="_blank"> <strong>GitHub</strong></a>
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
        <Navbar.Brand> {EduardezLogo}</Navbar.Brand>
      </Navbar>
    </footer>



      )
}


export default Footer
