import React from 'react'
import { Link } from 'react-router-dom'
import { map, toLower } from 'ramda'
import AddColor from '../components/add-color'
import ResetColors from '../components/reset-colors'

import { connect } from 'react-redux'

const colors = ['Red', 'Green', 'Blue']
const li = color => (
  <Link className={`link ${toLower(color)} f4 `} to={`/${color}`}>
    <li className="pa3 pv3 bb b--near-white o-70 hover-bg-near-white ">
      {color}
    </li>
  </Link>
)

const Home = props => (
  <div className="near-white o-70">
    <h1>Home</h1>
    <AddColor
      value={props.newcolor}
      onChange={props.setNewColor}
      onSubmit={props.addColor}
    />
    <ResetColors onSubmit={props.resetColors} />
    <ul className="list pl0 ml0 ba b--near-white o-70 br2">
      {map(li, props.colors)}
    </ul>
  </div>
)

const mapStateToProps = state => {
  return { colors: state.colors, newcolor: state.newcolor }
}

const mapActionsToProps = (dispatch, getState) => {
  return {
    setNewColor: event => {
      dispatch({ type: 'SET_NEW_COLOR', payload: event.target.value })
    },
    addColor: color => {
      dispatch({ type: 'ADD_COLOR', payload: color })
    },
    resetColors: event => {
      dispatch({ type: 'RESET_COLORS' })
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(Home)
