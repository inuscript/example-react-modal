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
    show: false,
    needAnimate: false,
    isAnimated: false
  }
  handleStart = () => {
    this.setState({isAnimated: true})
  }
  handleFinish = () => {
    this.setState({show: this.props.show, isAnimated: false}, () => {
    })
  }
  componentWillMount(){
    this.componentWillReceiveProps(this.props)
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.show !== this.state.show){
      this.setState({
        needAnimate: true
      })
    }
  }
  render(){
    const { show, children, hiddenStateItem } = this.props
    if( !this.state.show && !this.state.isAnimated && !this.state.needAnimate ){
      return hiddenStateItem
    }
    const animateStyle = show ? style.containerShow : style.containerHide
    const className = css(
      this.state.needAnimate && animateStyle
    )
    return <div className={className} onAnimationStart={this.handleStart} onAnimationEnd={this.handleFinish} >
      {children}
    </div>
  }
}

class MyModal extends Component{
  state = {
    show: true,
  }
  handleClose = () => {
    this.setState({show: false})
  }
  render(){
    const finishedItem = (<noscript />)
    return (
      <FadeAnimationContainer show={this.state.show} hiddenStateItem={finishedItem} >
        <Modal onClose={this.handleClose}>
          {this.props.children}
        </Modal>
      </FadeAnimationContainer>
    )
  }
}

export default MyModal;
