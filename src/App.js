import React, { Component } from 'react'
import MyModal from './Modal'
import Fade from './Fade'
import FadeWithRtc from './FadeWithRtc'

const ItemA = () => {
  return <div>hoge</div>
}

class App extends Component {
  render () {
    return (<FadeWithRtc/>)
    // return (<Fade/>)
    // return (
    //   <MyModal>
    //     <ItemA/>
    //   </MyModal>
    // )
  }
}

export default App
