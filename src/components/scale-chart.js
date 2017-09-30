import React, { Component } from 'react'
// components
import Canvas1 from './canvas-back'
import Canvas2 from './canvas-front'
import SelectKey from './select-key'
import SelectMode from './select-mode'

export default class ScaleChart extends Component {
  handleSelectKey (k) {
    this.props.selectKey(k)
  }

  handleSelectMode (mode) {
    this.props.selectMode(mode)
  }

  render() {
    return (
    <div>
      <div className="select-wrap">
        key: <SelectKey className="select-key" onChange={(e) => this.handleSelectKey(e.target.value)} />
        scale: <SelectMode className="select-mode" onChange={(e) => this.handleSelectMode(e.target.value)} />
      </div>
      <div className="wrapper">
        <Canvas1 {...this.props}  />
        <Canvas2 {...this.props} className="fingerPosition" />
      </div>
    </div>
    )
  }
}
