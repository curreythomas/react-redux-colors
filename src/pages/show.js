import React from 'react'
import { toLower } from 'ramda'

const Show = props => (
  <div
    className={`avenir vh-100 tc ttu white pv4 f1 bg-${toLower(
      props.match.params.color
    )}`}
  >
    {props.match.params.color}
  </div>
)
export default Show
