import React, { Component } from 'react';
import {ModalContainer, ModalDialog, FlexDialog, ModalPortal} from 'react-modal-dialog';

const ItemA = () => {
  return <div>hoge</div>
}

const Modal = ({onClose}) => {
  return (
    <ModalContainer onClose={onClose}>
      <ModalDialog onClose={onClose}>
        <ItemA/>
      </ModalDialog>
    </ModalContainer>
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
    return <Modal onClose={this.handleClose}/>
  }
}

export default App;
