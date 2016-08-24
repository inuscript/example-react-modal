import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite'
import modalStyle from './modal.style'

const style = StyleSheet.create(modalStyle)

const DialogHeader = ({onClose}) => {
  return <div>
    <div className={css(style.closeButton)} onClick={onClose}>× 閉じる</div>
  </div>
}
const ModalBackground = (props) => {
  return <div {...props} className={css(style.background)} />
}
const Dialog = ({children}) => {
  return <div className={css(style.dialog)}>
    {children}
  </div>
}

const Modal = ({onClose, children}) => {
  return (
    <div>
      <ModalBackground onClick={onClose} />
      <Dialog>
        <DialogHeader onClose={onClose} />
        {children}
      </Dialog>
    </div>
  );
}

class MyModal extends Component{
  state = {
    showModal: true,
    animateHide: false,
  }
  handleClose = () => {
    this.setState({animateHide: true})
  }
  handleAnimated = () => {
    if(this.state.animateHide){
      this.setState({showModal: false})
    }
  }
  render(){
    if(!this.state.showModal){
      return <noscript />
    }
    const cx = css(
      style.container,
      this.state.animateHide && style.containerHide
    )
    return (
      <div className={cx} onAnimationEnd={this.handleAnimated}>
        <Modal onClose={this.handleClose}>
          {this.props.children}
        </Modal>
      </div>
    )
  }
}

export default MyModal;
