import React, { Component } from 'react';
import MyModal from './Modal'
import Fade from './Fade'

const ItemA = () => {
  return <div>hoge</div>
}

class App extends Component{
  render(){
    return (<Fade/>)
    // return (
    //   <MyModal>
    //     <ItemA/>
    //   </MyModal>
    // )
  }
}

export default App
