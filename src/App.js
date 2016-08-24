import React, { Component } from 'react';
import {ModalContainer, ModalDialog, FlexDialog, ModalPortal} from 'react-modal-dialog';

const ItemA = () => {
  return <div>hoge</div>
}

const MyClose = (props) => {
  const style = {
    position: 'absolute',
    top: -10,
    right: -60,
    cursor: 'pointer',
    background: "white",
    borderRadius: 10,
    padding: 10
  }
  return <div style={style} {...props}>閉じる ×</div>
}

const MyModal = ({onClose, children}) => {
  return (
    <div>
      <ModalContainer onClick={onClose}>
        <ModalDialog>
          <MyClose onClick={onClose} />
          {children}
        </ModalDialog>
      </ModalContainer>
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
    const style = {zIndex: 10000}
    return (
      <div style={style}>
        <MyModal onClose={this.handleClose}>
          <ItemA/>
        </MyModal>
      </div>
    )
  }
}

export default App
