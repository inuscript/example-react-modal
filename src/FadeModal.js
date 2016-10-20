import React, { Component } from 'react'
import { style, fade, css } from './modal.style'

const DialogHeader = ({onClose}) => {
  return <div>
    <div className={css(style.closeLabel)} onClick={onClose}>× 閉じる</div>
  </div>
}

const BackgroundBlur = (props) => {
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
      <BackgroundBlur onClick={onClose} />
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
