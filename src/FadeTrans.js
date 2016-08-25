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
      css(fade.transition),
      this.state.show ? css(fade.enter) : css(fade.leave)
    )
    console.log(animate)
    return (
      <div>
        <button className={css(style.button)} onClick={this.handleToggle}>
          current: {str}
        </button>
        <div key={"item"} className={animate}>show</div>
      </div>
    )
  }
}

export default Fade
