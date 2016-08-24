import React, { Component } from 'react';
import MyModal from './Modal'

const ItemA = () => {
  return <div>hoge</div>
}

class App extends Component{
  render(){
    return (
      <MyModal>
        <ItemA/>
      </MyModal>
    )
  }
}

export default App
