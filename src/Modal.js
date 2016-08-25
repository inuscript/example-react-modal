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
    <div className={css(style.container)}>
      <ModalBackground onClick={onClose} />
      <Dialog>
        <DialogHeader onClose={onClose} />
        {children}
      </Dialog>
    </div>
  );
}

class FadeAnimationContainer extends Component{
  state = {
    finished: false,
    isAnimated: false
  }
  handleFinish = () => {
    this.state({finished: true, isAnimated: false}, () => {
      if(this.props.onFinish){
        this.props.onFinish()
      }
    })
  }
  render(){
    const { finish, children, finishedItem } = this.props

    if(!this.state.finished){
      return finishedItem
    }

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
    const finishedItem = (<noscript />)
    return (
      <FadeAnimationContainer finish={!this.props.showModal} finishedItem={finishedItem} >
        <Modal onClose={this.handleClose}>
          {this.props.children}
        </Modal>
      </FadeAnimationContainer>
    )
  }
}

export default MyModal;
