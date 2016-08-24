import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite'
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    ...mixin.wrapAll(),
    ...mixin.fadeIn(0, 0.8),
    opacity: 0.8,
    background: "#000",
  },
  closeButton: {
    padding: 3,
    textAlign: "right",
    cursor: "pointer",
    color: "gray",
  },
  dialog: {
    ...mixin.fadeIn(0, 1),
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

const ItemA = () => {
  return <div>hoge</div>
}

const Animation = ({children}) => {
  const aStyle = {
    enter: css(animationStyle.enter),
    enterActive: css(animationStyle.enterActive),
    leave: css(animationStyle.leave),
    leaveActive: css(animationStyle.leaveActive),
  }
  console.log(aStyle)
  return <CSSTransitionGroup transitionEnterTimeout={500} transitionLeaveTimeout={500} transitionName={aStyle}>
    {children}
  </CSSTransitionGroup>

}

const Modal = ({onClose, children}) => {
  return (
    // <Animation>
      <div className={css(style.container)} >
        <ModalBackground onClick={onClose} />
        <Dialog>
          <DialogHeader onClose={onClose} />
          {children}
        </Dialog>
      </div>
    // </Animation>
  );
}

class MyModal extends Component{
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
        {this.props.children}
      </Modal>
    )
  }
}

export default MyModal;
