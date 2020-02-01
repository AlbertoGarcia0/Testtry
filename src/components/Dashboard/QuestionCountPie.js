import React from "react"

import '../../assets/css/Dashboard.css';

import { Pie } from 'react-chartjs-2';
import Card from 'react-bootstrap/Card'

const colores_bonicos = ['#E83A8C','#4C73FF','#3AE86A','#FFDB2E','#FF5229']


// ---------------- Colores random para las asignaturas -----------------
function getRandomColors(cantidad) {
  var color_scheme = []
  var colores_aux = colores_bonicos.slice();
  for (var i = 0; i < cantidad; i++) {
    color_scheme.push(colores_aux.pop())
  }
  return color_scheme
}

const lighten = (color, amount)=> {
  color = (color.indexOf("#")>=0) ? color.substring(1,color.length) : color;
  amount = parseInt((255*amount)/100);
  return color = `#${addLight(color.substring(0,2), amount)}${addLight(color.substring(2,4), amount)}${addLight(color.substring(4,6), amount)}`;
}

const addLight = function(color, amount){
  let cc = parseInt(color,16) + amount;
  let c = (cc > 255) ? 255 : (cc);
  c = (c.toString(16).length > 1 ) ? c.toString(16) : `0${c.toString(16)}`;
  return c;
}

function getLightenColors(colors){
  var lighten_colors = []
    for (var i = 0; i < colors.length; i++) {
      if (colors[i] != undefined) {
        lighten_colors.push(lighten(colors[i], 10))
    }
  }
  return lighten_colors
}


// ----------------- Creacion del Pie --------------------

function newDataset(asignaturas, question_count){
  var dataset = {}
  var inner_dataset = [{}]
  var random_colors = getRandomColors(asignaturas.length)

  dataset.labels = asignaturas
  inner_dataset[0].data = question_count
  inner_dataset[0].backgroundColor = random_colors
  inner_dataset[0].hoverBackgroundColor = getLightenColors(random_colors)
  dataset.datasets = inner_dataset

  return dataset
}

// ---------------- datos de la bbdd --------------

function lastDBUpdate(){
  var fecha = 'Hace 3 dias'
  return fecha
}

// ---------------- Clase Pie -----------------------

class QuestionPie extends React.Component {
  constructor(props) {
    super(props)
    this.data = newDataset(this.props.info_asignaturas[0], this.props.info_asignaturas[1])
  }

  render() {
    return (
      <div>
        <Card className="text-center" id='pie_card'>
          <Card.Header id='pie_card_header'>Preguntas disponibles</Card.Header>
          <Card.Body>
              <Pie data={this.data} />
          </Card.Body>
          <Card.Footer className="text-muted">Ultima actualizacion: {lastDBUpdate()}</Card.Footer>
        </Card>
      </div>
    );
  }
}

export default QuestionPie
