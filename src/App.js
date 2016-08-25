import React, { Component } from 'react'
import FadeModal from './FadeModal'

const ItemA = () => {
  return <div>hoge</div>
}

class App extends Component {
  render () {
    return (
      <div>
        <FadeModal>
          <ItemA/>
        </FadeModal>
      </div>
    )
  }
}

export default App
