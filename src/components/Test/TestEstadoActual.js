import React from "react"
import SkyLight from 'react-skylight';

const dialog_style = (
  {
    backgroundColor: '#00897B',
    color: '#ffffff',
    width: '70%',
    height: '600px',
    marginTop: '-300px',
    marginLeft: '-35%',
  }
)


class ModalNuevoTest extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <section>
          <button onClick={() => this.customDialog.show()}>Open Modal</button>
        </section>
        <SkyLight dialogStyles={dialog_style} hideOnOverlayClicked ref={ref => this.customDialog = ref} title="A Custom Modal">
          I'm a custom modal!
        </SkyLight>
      </div>
    )
  }
}

export default ModalNuevoTest
