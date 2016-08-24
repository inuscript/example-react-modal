import { StyleSheet } from 'aphrodite'

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
export default {
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
  },
  closeButton: {
    padding: 3,
    textAlign: "right",
    cursor: "pointer",
    color: "gray",
  },
  dialog: {
    boxSizing: 'border-box',
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 4,
    width: "auto",
    position: 'absolute'
  }
}
