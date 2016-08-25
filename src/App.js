import React, { Component } from 'react'
import MyModal from './Modal'
import Fade from './Fade'
import FadeWithRtc from './FadeWithRtc'
import FadeTrans from './FadeTrans'
import ModalTrans from './ModalTrans'

const ItemA = () => {
  return <div>hoge</div>
}

class App extends Component {
  render () {
    // return (<FadeTrans/>)
    // return (<Fade/>)
    return (
      <ModalTrans>
        <ItemA/>
      </ModalTrans>
    )
  }
}

export default App
