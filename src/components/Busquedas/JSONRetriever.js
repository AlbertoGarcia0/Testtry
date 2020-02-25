
const base_url = 'https://eduardez.github.io/Testtry-Database-Manager/APP_TESTS/TesttryDB/'

export async function buscarPreguntas(asignatura, palabras_clave, tipo_pregunta){
  var result_array = JSON.parse('{"Preguntas":[]}')

  console.log('Asignatura: ' + asignatura + ', palabras_clave: ' + palabras_clave + ', tipo_pregunta: ' + tipo_pregunta)
  let url = base_url + asignatura +'/preguntas.json'
  let response = await fetch(url);
  if(response.status == 404){
    console.log('NOT FOUND');
  }else {
    result_array   = await response.json()
  }
  return result_array
}

export async function getAllAsignaturas(){
  let result = []
  let url = base_url +'/database_info.json'
  let response = await fetch(url);
  if(response.status == 404){
    console.log('NOT FOUND database_info');
  }else {
    result = await response.json()
  }
  let asignaturas = result.categorias
  return asignaturas
}

export async function getAllNamesAsignaturas(){
  let asignaturas_dict = await getAllAsignaturas()
  let arr_nombres = []
  for (var i = 0; i < asignaturas_dict.length; i++) {
    arr_nombres.push(asignaturas_dict[i].nombre_categoria)
  }
  return arr_nombres
}

export default function dummy_funct(){
  console.log('Holiwi');
}
