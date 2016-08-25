import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import CssTransitionGroup from 'react-addons-css-transition-group'
import TransitionGroup from 'react-addons-transition-group'

// style
const fadeIn = (start = 0, end = 1) => ({
  animationName: {
    from: { opacity: start },
    to: { opacity: end }
  },
  animationDuration: '0.3s'
})

const style = StyleSheet.create({
  animateShow: {
    ...fadeIn(0, 1)
  },
  animateHide: {
    ...fadeIn(1, 0)
  },
  button: {
    padding: 10,
  },
  item: {
    background: 'rgb(184, 78, 109)',
    padding: 10,
    borderRadius: 4
  }
})

// component

class FadeAnimationContainer extends Component {
  render () {
    
  }
}

class Fade extends Component {
  state = {
    show: true
  }
  handleToggle = () => {
    this.setState({show: !this.state.show})
  }
  render () {
    return (
      <div>
        <button className={css(style.button)} onClick={this.handleToggle}>
          current: {this.state.show ? 'show' : 'hide'}
        </button>
        <FadeAnimationContainer show={this.state.show} >
          <div className={css(style.item)}>aaa</div>
        </FadeAnimationContainer>
      </div>
    )
  }
}

export default Fade
