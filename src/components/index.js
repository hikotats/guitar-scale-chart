import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ScaleChart from './scale-chart'

import { selectKey, selectMode } from '../modules/selecter'

const mapStateToProps = (state) => {
  return {
    tonality: state.tonality,
    mode: state.mode
  }
}

const mapDispatchToProps = (dispatch) => {
 return {
   selectKey: (k) => {
     dispatch(selectKey(k))
   },
   selectMode: (m) => {
     dispatch(selectMode(m))
   }
 }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScaleChart)
