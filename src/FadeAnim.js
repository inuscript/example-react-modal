import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import cx from 'classnames'
const style = StyleSheet.create({
  button: {
    padding: 10,
  },
  item: {
    background: 'rgb(184, 78, 109)',
    padding: 10,
    borderRadius: 4
  }
})

const fadeIn = (start = 0, end = 1) => ({
  animationName: {
    from: { opacity: start },
    to: { opacity: end }
  },
  animationDuration: '0.3s',
  animationFillMode: 'both'
})

const fade = StyleSheet.create({
  enter: {
    ...fadeIn(0, 1)
  },
  leave: {
    ...fadeIn(1, 0)
  },
})

class Fade extends Component {
  state = {
    show: true
  }
  handleToggle = () => {
    this.setState({show: !this.state.show})
  }
  render () {
    let str = (this.state.show ? 'show' : 'hide')
    let animate = cx(
      this.state.show ? css(fade.enter) : css(fade.leave)
    )
    return (
      <div>
        <button className={css(style.button)} onClick={this.handleToggle}>
          current: {str}
        </button>
        <div key={"item"} className={animate}>{str}</div>
      </div>
    )
  }
}

export default Fade
