import React, { Component } from 'react'
import PropTypes from 'prop-types'
import KEYS from '../../const/key'

const SelectKey = props => (
  <select {...props}>
    { Object.keys(KEYS).map((k) => (
      <option key={k} value={k}>{k}</option>
    )) }
  </select>
)

export default SelectKey
