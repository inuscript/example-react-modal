import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important'
import CSSTransitionGroup from　'react-addons-css-transition-group'

const mixin = {
  wrapAll(){
    return {
      height: "100%",
      width: "100%",
      position: 'absolute',
      top: 0,
      left: 0,
    }
  },
  fadeIn(start=0, end=1) {
    return {
      animationName: {
        from: { opacity: start }, to: { opacity: end }
      },
      animationDuration: "0.3s"
    }
  }
}

const style = StyleSheet.create({
  container: {
    ...mixin.wrapAll(),
    ...mixin.fadeIn(0, 1),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

  },
  containerHide: {
    ...mixin.fadeIn(1, 0),
  },
  background: {
    ...mixin.wrapAll(),
    opacity: 0.8,
    background: "#000",
    zIndex: 10,
  },
  closeButton: {
    padding: 3,
    textAlign: "right",
    cursor: "pointer",
    color: "gray",
  },
  dialog: {
    zIndex: 100,
    boxSizing: 'border-box',
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 4,
    width: "auto",
  }
})

const animationStyle = StyleSheet.create({
  enter: {
    opacity:0
  },
  enterActive:{
    opacity: 1,
    transition: "opacity 300ms ease-in"
  },
  leave:{
    opacity: 1
  },
  leaveActive:{
    opacity: 0,
    transition: "opacity 300ms ease-in"
  }
})

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
