import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite'

const baseStyles = {
  wrapAll: {
    height: "100%",
    width: "100%",
    position: 'absolute',
    top: 0,
    left: 0,
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
    ...baseStyles.wrapAll,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    ...baseStyles.wrapAll,
    ...baseStyles.fadeIn(0, 0.8),
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
    ...baseStyles.fadeIn(0, 1),
    zIndex: 100,
    boxSizing: 'border-box',
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 4,
    width: "auto",
    transition: 'transform 0.1s',
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

const Modal = ({onClose, children}) => {
  return (
    <div className={css(style.container)} >
      <ModalBackground onClick={onClose} />
      <Dialog>
        <DialogHeader onClose={onClose} />
        {children}
      </Dialog>
    </div>
  );
}

class App extends Component{
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
        <ItemA/>
      </Modal>
    )
  }
}

export default App;
