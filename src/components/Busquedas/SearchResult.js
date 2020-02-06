import React from "react"
import '../../assets/css/Busquedas.css';

import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'


class SearchResult extends React.Component{
  constructor(props) {
    super(props);

  }

  render(){
    return(
        <Card id='search_result_card'>
          <Card.Header > Resultados </Card.Header>
          <Card.Body id='card_body_result_container' >
            
          </Card.Body>
        </Card>
    )
  }
}
export default SearchResult
