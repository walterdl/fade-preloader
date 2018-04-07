import React, {Component} from 'react'
import {render} from 'react-dom'

import FadePreloader from '../../src'

class Demo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showPreloader: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showPreloader: false
      })
    }, 4000)
  }

  render() {
    return (
      <div>
        <FadePreloader show={this.state.showPreloader} />
        <h1>fade-preloader Demo</h1>
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#demo'))
