import React from "react"
import '../assets/css/Notificaciones.css';

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {ToastProvider, useToasts, dataPersistenceLayer } from 'react-toast-notifications';
import { ToastContainer, toast } from 'react-toastify';
toast.configure()


class TostadasToastify extends React.Component {
  constructor(props) {
    super(props);

    toast.configure({
      autoClose: 3000,
      draggable: false,
      position: "top-center"

    });
  }

  defaulto(){
    toast("Se ha pillao nena, no te hagas la tonta!",
     { type:"default"});}

   warning(){
     toast("Pero que haces DORIS, QUE NO DOY UNA!",
       { type:"warning" });}

   info(){
     toast("Mirame DORIS, SOY TU FUTURO!!",
      { type:"info"});}

   danger(){
     toast("Ay dios mio QUE CALVARIO, QUE NO DOY UNA!",
      { type:"error"});}

  success(){
    toast("Aún huele a TCAE.",
      { type:"success"});}

  render() {
    return (
      <div>
        <Button outline variant="warning" onClick={this.warning}>Warning</Button>
        <Button outline variant="info" onClick={this.info}>Info</Button>
        <Button outline variant="danger" onClick={this.danger}>Danger</Button>
        <Button outline variant="success" onClick={this.success}>Success</Button>
        <Button outline variant="dark" onClick={this.defaulto}>Default</Button>
      </div>
    );
  }
}



const notif_main_div= (
  <div>
    <Card border="dark">
      <Card.Header as="h5">Notificaciones</Card.Header>
      <Card.Body>
        <Card.Title>React Toastify Notifications</Card.Title>
        <Card.Text>
          <TostadasToastify />
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        <Row>
          <Col sm><a href="https://github.com/jossmac/react-toast-notifications" target="_blank">React Toast Notifications</a></Col>
          <Col sm><a href="https://github.com/fkhadra/react-toastify" target="_blank">React Toastify</a></Col>
        </Row>

      </Card.Footer>
    </Card>
  </div>
)

function Notificaciones(){
  return(
    <div className="fluid">
        {notif_main_div}
    </div>
  )
}

export default Notificaciones;
