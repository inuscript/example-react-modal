import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
// import TransitionGroup from 'react-addons-transition-group'

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

// style
// const fadeIn = (start = 0, end = 1) => ({
//   animationName: {
//     from: { opacity: start },
//     to: { opacity: end }
//   },
//   animationDuration: '0.3s'
// })

const fadeTransition = StyleSheet.create({
  enter: {
    opacity: 0.01
  },
  enterActive: {
    opacity: 1,
    transition: "opacity 500ms ease-in"
  },
  appear: {
    opacity: 0.01
  },
  appearActive: {
    opacity: 1,
    transition: "opacity 500ms ease-in"
  },
  leave: {
    opacity: 1
  },
  leaveActive: {
    opacity: 0.01,
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
    const transitionName={
      enter: css(fadeTransition.enter),
      enterActive: css(fadeTransition.enterActive),
      appear: css(fadeTransition.apper),
      appearActive: css(fadeTransition.apperActive),
      leave: css(fadeTransition.leave),
      leaveActive: css(fadeTransition.leaveActive),
    }
    return (
      <div>
        <button className={css(style.button)} onClick={this.handleToggle}>
          current: {this.state.show ? 'show' : 'hide'}
        </button>
        <ReactCSSTransitionGroup
          transitionName={transitionName}
          // transitionName={"example"}
          transitionEnterTimeout={500000}
          transitionLeaveTimeout={500000}
          transitionAppearTimeout={500000}
        >
          {
            this.state.show
              ? (<div key="show" className={css(style.item)}>aaa</div>)
              : (<div key="hide" >none</div>)
          }
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default Fade
