import { StyleSheet, css } from 'aphrodite/no-important'

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

export const style = StyleSheet.create({
  container: {
    ...fullScreen(),
    ...justifyParent()
  },
  background: {
    ...fullScreen(),
    opacity: 0.8,
    background: '#000'
  },
  closeLabel: {
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
    minWidth: "40%",
    minHeight: "40%",
  }
})

const animationBase = {
  animationDuration: '0.5s',
  animationFillMode: 'both'
}
const fadeAnimates = [
  { opacity: 0, display:"none", visibility: "hidden" },
  { opacity: 0.001, display:"block", visibility: "visible"  },
  { opacity: 1,  display:"block", visibility: "visible" }
]

const fadeIn = {
  "0%": fadeAnimates[0],
  "0.1%": fadeAnimates[1],
  "100%": fadeAnimates[2],
}

const fadeOut = {
  "0%": fadeAnimates[2],
  "99.9%": fadeAnimates[1],
  "100%": fadeAnimates[0],
}

export const fade = StyleSheet.create({
  enter: {
    animationDelay: '0.2s',
    animationName: fadeIn,
    ...animationBase,
  },
  leave: {
    animationName: fadeOut,
    ...animationBase,
  },
})

export { StyleSheet, css }