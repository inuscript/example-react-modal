import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import modalStyle from './modal.style'
import cx from 'classnames'

const animationBase = {
  animationDuration: '0.7s',
  animationFillMode: 'forwards'
}
const fadeAnimates = [
  { opacity: 0, display:"none", visibility: "hidden" },
  { opacity: 0.001, display:"block", visibility: "visible"  },
  { opacity: 1,  display:"block", visibility: "visible" }
]

const fadeIn = {
  "0%": fadeAnimates[0],
  "1%": fadeAnimates[1],
  "100%": fadeAnimates[2],
}

const fadeOut = {
  "0%": fadeAnimates[2],
  "99%%": fadeAnimates[1],
  "100%": fadeAnimates[0],
}

const fade = StyleSheet.create({
  enter: {
    animationName: fadeIn,
    ...animationBase,
  },
  leave: {
    animationName: fadeOut,
    ...animationBase,
  },
})

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
  )
}

const FadeAnimation = ({show, onFinish, children}) => {
  let fadeClass = css( show ? fade.enter : fade.leave)
  return (
    <div className={fadeClass} onAnimationEnd={onFinish}>
      {children}
    </div>
  )
}

class FadeModal extends Component {
  state = {
    show: true,
  }
  handleClose = () => ( this.setState({show: false}) )
  render () {
    if(this.state.finished){
      return <noscript/>
    }
    return (
      <FadeAnimation show={this.state.show}>
        <Modal onClose={this.handleClose}>
          {this.props.children}
        </Modal>
      </FadeAnimation>
    )
  }
}

export default FadeModal
