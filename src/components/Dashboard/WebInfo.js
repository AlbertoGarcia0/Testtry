import React from "react"
import '../../assets/css/Dashboard.css';
import logo from '../../assets/img/LogoBig.png';

import Card from 'react-bootstrap/Card'


class WebInfo extends React.Component{
  render(){
    return(
      <div class="card border-0 "  id='web_info_card'>
        <div class="row no-gutters">
          <div class="col-auto">
            <img src={logo} alt="" />
          </div>
            <div class="col">
              <div class="card-block px-2">
                <h1>Info de la pagina</h1>
                <p>Descripcion de la pagina con un parrafaco to largo. </p>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WebInfo
