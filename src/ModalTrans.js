import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import modalStyle from './modal.style'

const fade = StyleSheet.create({
  enter: {
    opacity: 1
  },
  leave: {
    opacity: 0
  },
  transition:{
    transition: "opacity 500ms ease-in"
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
    show: true
  }
  handleClose = () => {
    this.setState({show: false})
  }
  render () {
    let animate = [
      css(fade.transition),
      this.state.show ? css(fade.enter) : css(fade.leave)
    ]
    return (
      <div className={animate}>
        <Modal onClose={this.handleClose}>
          {this.props.children}
        </Modal>
      </div>
    )
  }
}

export default MyModal
