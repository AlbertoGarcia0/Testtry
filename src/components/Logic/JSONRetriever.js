
export async function getPreguntas(asignatura, palabras_clave, tipo_pregunta) {
  try {
    const data = await fs.readFile(`./${asignatura}/preguntas.json`, 'utf-8');
    const result_array = JSON.parse(data);
    return result_array;
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log('File not found');
      return { Preguntas: [] };
    }
    throw error;
  }
}

export async function buscarPreguntas(asignatura, palabras){
  let aux = await getPreguntas(asignatura, '', '')
  let preguntas = aux.Preguntas
  let array_preguntas_encontradas = []
  for (var i = 0; i < preguntas.length; i++) {
    if( await isWordContained(preguntas[i], palabras)){
      array_preguntas_encontradas.push(preguntas[i])
    }
  }
  return array_preguntas_encontradas
}

async function isWordContained(pregunta, arr_palabra){
  let isContained = false
  let arr_all_strings = []
  arr_all_strings.push(pregunta.enunciado.toLowerCase())
  for (var i = 0; i < pregunta.respuestas.length; i++) {
    arr_all_strings.push(pregunta.respuestas[i].toLowerCase())
  }
  for (var i = 0; i < arr_palabra.length; i++) {
    for (var j = 0; j < arr_all_strings.length; j++) {
      if(arr_all_strings[j].includes(arr_palabra[i].toLowerCase())){
        isContained = true
        break
      }
    }
  }
  return isContained
}

import fs from 'fs/promises';

export async function getAllAsignaturas() {
  try {
    const data = await fs.readFile('./database_info.json', 'utf-8');
    const result = JSON.parse(data);
    const asignaturas = result.categorias;
    return asignaturas;
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log('File not found: database_info.json');
      return [];
    }
    throw error;
  }
}

export async function getAllNamesAsignaturas(){
  let asignaturas_dict = await getAllAsignaturas()
  let arr_nombres = []
  for (var i = 0; i < asignaturas_dict.length; i++) {
    arr_nombres.push(asignaturas_dict[i].nombre_categoria)
  }
  return arr_nombres
}

export async function getPreguntasTest(num_preguntas, asignatura){
  let preguntas = await getPreguntas(asignatura, '', '')
  let array_preguntas = []
  while (array_preguntas.length<num_preguntas) {
    let random_pos = Math.floor(Math.random() * preguntas.Preguntas.length)
    let preg = await preguntas.Preguntas.splice(random_pos, 1)
    array_preguntas.push(preg)
  }
  return array_preguntas
}

export default function dummy_funct(){
  console.log('Holiwi');
}
