import React from 'react'
import { connect } from 'react-redux'
import Counter from '../components/counter'
import { increment, decrement,incrementAsync } from "../redux/action-creators/count";


/*
应用根组件
 */
export default connect(
  state => ({count:state.count}),
  {increment,decrement,incrementAsync}
)(Counter)