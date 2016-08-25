import React, { Component } from 'react'
import MyModal from './Modal'
import Fade from './Fade'
import FadeWithRtc from './FadeWithRtc'
import FadeTrans from './FadeTrans'

const ItemA = () => {
  return <div>hoge</div>
}

class App extends Component {
  render () {
    return (<FadeTrans/>)
    // return (<Fade/>)
    // return (
    //   <MyModal>
    //     <ItemA/>
    //   </MyModal>
    // )
  }
}

export default App
