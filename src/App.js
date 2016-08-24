import React, { Component } from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';

const ItemA = () => {
  return <div>hoge</div>
}
class Modal extends Component {
  render() {
    return (
      <div className="App">
        <ModalContainer>
          <ModalDialog>
            <ItemA/>
          </ModalDialog>
        </ModalContainer>
      </div>
    );
  }
}

export default Modal;
