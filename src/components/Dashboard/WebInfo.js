import React from "react"
import '../../assets/css/Dashboard.css';
import logo from '../../assets/img/LogoBig.png';


class WebInfo extends React.Component{
  render(){
    return(
      <div className="card border-0 "  id='web_info_card'>
        <div className="row no-gutters">
          <div className="col-auto">
            <img src={logo} alt="" />
          </div>
            <div className="col">
              <div className="card-block px-2">
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
