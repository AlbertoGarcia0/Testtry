import React from 'react'

import {Modal, Button} from 'react-bootstrap'


export default class ModalPreguntas extends React.Component {
    constructor(props){
        super(props)
    }

    render(){    
        return (
        <Modal
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={this.props.visible}
        >
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Preguntas Acertadas
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                PREGUNTAS CORRECTAS: {this.props.correctas}
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={this.props.hideModal}>Close</Button>
            </Modal.Footer>
        </Modal>
        );
    }

}