import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MODES from '../../const/mode'

const SelectMode = props => (
  <select {...props}>
    { Object.keys(MODES).map((mode) => (
      <option key={mode} value={mode}>{mode}</option>
    )) }
  </select>
)

export default SelectMode
