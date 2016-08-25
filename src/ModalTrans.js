import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import modalStyle from './modal.style'
import cx from 'classnames'

const fadeIn = (start = 0, end = 1) => ({
  animationName: {
    from: { opacity: start },
    to: { opacity: end }
  },
  animationDuration: '0.3s'
})

const fade = StyleSheet.create({
  enter: {
    ...fadeIn(0, 1)
  },
  leave: {
    ...fadeIn(1, 0)
  },
  transition:{
    // transition: "opacity 500ms ease-in"
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

class MyModal extends Component {
  state = {
    show: true,
    finished: false
  }
  handleAnimationEnd = () => { // animation終了時に
    if(this.state.show === false){
      this.setState({finished: true})
    }
  }
  handleClose = () => {
    this.setState({show: false})
  }
  render () {
    if(this.state.finished){
      return <noscript/>
    }
    let animate = cx(
      css(fade.transition),
      this.state.show ? css(fade.enter) : css(fade.leave)
    )
    return (
      <div className={animate} onAnimationEnd={this.handleAnimationEnd}>
        <Modal onClose={this.handleClose}>
          {this.props.children}
        </Modal>
      </div>
    )
  }
}

export default MyModal
