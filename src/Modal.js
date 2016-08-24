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

class HideAnimationContainer extends Component{
  state = {
    finished: false,
    isAnimated: false
  }
  handleFinish = () => {
    this.state({finished: true, isAnimated: false}, () => {
      this.props.onFinish()
    })
  }
  render(){
    const { finish, onFinish, children } = this.props
    const className = css(
      this.state.isAnimated && style.containerShow,
      this.state.isAnimated && style.containerHide
    )
    return <div className={className} onAnimationEnd={this.handleFinish} >
      {children}
    </div>
  }
}

class MyModal extends Component{
  state = {
    showModal: true,
    animateHide: false,
  }
  handleClose = () => {
    this.setState({animateHide: true})
  }
  handleAnimationEnd = () => {
    if(!this.state.animateHide){
      return
    }
    this.setState({showModal: false})
  }
  render(){
    if(!this.state.showModal){
      return <noscript />
    }
    const cx = css(
      style.container,
    )
    return (
      <div className={cx} onAnimationEnd={this.handleAnimationEnd}>
        <Modal onClose={this.handleClose}>
          {this.props.children}
        </Modal>
      </div>
    )
  }
}

export default MyModal;
