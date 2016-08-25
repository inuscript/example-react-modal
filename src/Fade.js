import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

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
    padding: 10
  },
  item: {
    background: 'rgb(184, 78, 109)',
    padding: 10,
    borderRadius: 4
  }
})

// component

class FadeAnimationContainer extends Component {
  state = {
    show: false,
    needAnimate: false,
    isAnimated: false
  }
  handleStart = () => {
    this.setState({isAnimated: true})
  }
  handleFinish = () => {
    this.setState({
      show: this.props.show,
      isAnimated: false,
      needAnimate: this.nextNeedAnimate(this.props)
    }, () => {
    })
  }
  nextNeedAnimate (nextProps) {
    return (nextProps.show !== this.state.show && !this.state.isAnimated)
  }
  componentWillMount () { // initial
    this.setState({
      needAnimate: this.nextNeedAnimate(this.props)
    })
  }
  componentWillReceiveProps (nextProps) {
    this.setState({
      needAnimate: this.nextNeedAnimate(nextProps)
    })
  }
  render () {
    if (!this.state.show && !this.state.isAnimated && !this.state.needAnimate) {
      return (<noscript />)
    }
    const { show, children, hiddenStateItem } = this.props
    const animateStyle = (show ? style.animateShow : style.animateHide)
    const className = css(
      this.state.needAnimate && animateStyle
    )
    return <div className={className} onAnimationStart={this.handleStart} onAnimationEnd={this.handleFinish} >
      {children}
    </div>
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
