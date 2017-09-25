import React, { Component } from 'react'
import PropTypes from 'prop-types'
import KEYS from '../../const/key'

const SelectKey = props => (
  <select {...props}>
    { Object.keys(KEYS).map((key) => (
      <option key={key} value={key}>{key}</option>
    )) }
  </select>
)

export default SelectKey
