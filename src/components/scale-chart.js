import React, { Component } from 'react'
// components
import Canvas1 from './canvas1'
import Canvas2 from './canvas2'
import SelectKey from './select-key'
import SelectMode from './select-mode'

export default class ScaleChart extends Component {
  handleSelectKey (key) {
    store.dispatch(this.props.selectKey(key))
  }

  handleSelectMode (mode) {
    store.dispatch(this.props.selectMode(mode))
  }

  render() {
    return (
    <div>
      <SelectKey onChange={(e) => this.handleSelectKey(e.target.value)} />
      <SelectMode onChange={(e) => this.handleSelectMode(e.target.value)} />
      <div className="wrapper">
        <Canvas1 className="fingerBoard" />
        <Canvas2 className="fingerPosition" />
      </div>
    </div>
    )
  }
}
