import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite'

const style = StyleSheet.create({
  background: {
    opacity: 0.8,
    position: 'absolute',
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    background: "#000"
  },
  closeButton: {
  },
  dialog: {
    boxSizing: 'border-box',
    position: 'relative',
    backgroundColor: "white"
  }
})

const Close = () => {
  <div className={css(style.closeButton)}>×</div>
}
const ModalBackground = () => {
  return <div className={css(style.background)} />
}

const Dialog = ({children}) => {
  return <div className={css(style.dialog)}>
    {children}
  </div>
}
const ItemA = () => {
  return <div>hoge</div>
}

const Modal = ({onClose, children}) => {
  return (
    <div>
      <ModalBackground />
      <Dialog>
        {children}
      </Dialog>
    </div>
  );
}

class App extends Component{
  state = {
    showModal: true
  }
  handleClose = () => {
    this.setState({showModal: false})
  }
  render(){
    if(!this.state.showModal){
      return <noscript />
    }
    return (
      <Modal onClose={this.handleClose}>
        <ItemA/>
      </Modal>
    )
  }
}

export default App;
