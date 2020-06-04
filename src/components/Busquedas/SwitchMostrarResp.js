import React from 'react'
import '../../assets/css/Busquedas.css'


export default class SwitchResp extends React.Component{
    render(){
        return(
            <div style={{alignSelf:'center'}}>
                <a style={{margin:'10px'}}>Mostrar respuestas</a>
                <label class="switch">
                    <input id='checkbox_mostrar_preguntas' type="checkbox" />
                    <span class="slider round"></span>
                </label>
            </div>
        )
    }
}