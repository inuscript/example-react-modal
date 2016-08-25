const fullScreen = () => ({
  height: '100%',
  width: '100%',
  position: 'absolute',
  top: 0,
  left: 0
})

const justifyParent = () => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})
const justifyChild = () => ({
  width: 'auto',
  position: 'absolute'
})

const fadeIn = (start = 0, end = 1) => ({
  animationName: {
    from: { opacity: start },
    to: { opacity: end }
  },
  animationDuration: '0.3s'
})

export default {
  container: {
    ...fullScreen(),
    ...justifyParent()
    // ...fadeIn(0, 1),
  },
  containerShow: {
    ...fadeIn(0, 1)
  },
  containerHide: {
    ...fadeIn(1, 0)
  },
  background: {
    ...fullScreen(),
    opacity: 0.8,
    background: '#000'
  },
  closeButton: {
    padding: 3,
    textAlign: 'right',
    cursor: 'pointer',
    color: 'gray'
  },
  dialog: {
    ...justifyChild(),
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 4,
    // dialog size
    minWidth: 600,
    minHeight: 400,
  }
}
