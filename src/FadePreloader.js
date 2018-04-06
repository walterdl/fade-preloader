import React, { Component } from "react"
import PropTypes from 'prop-types'

// Own
import "./FadePreloader.css"

function getTransitionEndEventName() {
  var t, el = document.createElement("fakeelement")

  var transitions = {
    "transition": "transitionend",
    "OTransition": "oTransitionEnd",
    "MozTransition": "transitionend",
    "WebkitTransition": "webkitTransitionEnd"
  }

  var transitionSelected = false

  for (t in transitions){
    if (el.style[t] !== undefined){
      transitionSelected = transitions[t]
    }
  }

  return transitionSelected
}

const transitionEndEventName = getTransitionEndEventName()

const fadeModes = {
  fadeOutWithoutTransition: "fade-out-no-transition",
  fadeOutWithTransition: "fade-out",
  fadeInWithoutTransition: "fade-in-no-transition",
  fadeInWithTransition: "fade-in"
}

class FadePreloader extends Component {
  constructor(props) {
    super(props)

    this.state = {
      present: false,
      appearMode: "",
      forceToNoneAppearMode: !transitionEndEventName ? true : false
    }

    this.handleTransitionEnd = this.handleTransitionEnd.bind(this)
  }

  componentDidMount() {
    if (!this.state.forceToNoneAppearMode && this.DOMElement && this.DOMElement.addEventListener !== undefined) {
      this.DOMElement.addEventListener(transitionEndEventName, this.handleTransitionEnd)
    }

    if (this.props.show) {
      this.show()
    }
  }

  componentWillReceiveProps(nextProps) {
    const currentProps = this.props

    if (currentProps.show && !nextProps.show) {
      this.hide(nextProps)
    } else if (!currentProps.show && nextProps.show) {
      this.show(nextProps)
    }
  }

  show(propsContext = this.props) {
    const { forceToNoneAppearMode } = this.state
    const { showInmediatly } = propsContext

    this.setState({
      present: true,
    }, () => {
      this.setState({
        appearMode: forceToNoneAppearMode || showInmediatly ?
          fadeModes.fadeInWithoutTransition : fadeModes.fadeInWithTransition
      })
    })
  }

  hide(propsContext = this.props) {
    const { forceToNoneAppearMode } = this.state
    const { hideInmediatly } = propsContext

    if (forceToNoneAppearMode || hideInmediatly) {
      this.setState({
        present: false,
        appearMode: fadeModes.fadeOutWithoutTransition
      })
    } else {
      // If is not to hide inmediatly then the transition
      // is applied first. Once the the transition is finished
      // handleTransitionEnd() catch this event and set display none
      this.setState({
        appearMode: fadeModes.fadeOutWithTransition
      })
    }
  }

  handleTransitionEnd() {
    // Used to complete the fade-out transition
    // Here the visibility is set to false so the container
    // will have its display to none once the fade-out transition is finished
    if (this.state.appearMode === fadeModes.fadeOutWithTransition) {
      this.setState({
        present: false
      })
    }
  }

  render() {
    const { className, imageUrl } = this.props
    const { present, appearMode } = this.state

    return (
      <div
        ref={el => this.DOMElement = el}
        className={`${className}
          fade-preloader
          ${present ? "is-present" : "" }
          ${appearMode}
          `}>
        <div className="content">
          <img
            className="img-fluid"
            src={imageUrl}
            alt="" />
          <p className="saving"><span>.</span><span>.</span><span>.</span></p>
        </div>
      </div>
    )
  }
}

FadePreloader.propTypes = {
  show: PropTypes.bool.isRequired,
  showInmediatly: PropTypes.bool,
  hideInmediatly: PropTypes.bool,
  imageUrl: PropTypes.string,
  className: PropTypes.string
}

FadePreloader.defaultProps = {
  show: false,
  showInmediatly: true,
  hideInmediatly: false,
  imageUrl: "",
  className: ""
}

export default FadePreloader
