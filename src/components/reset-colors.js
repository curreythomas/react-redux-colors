import React from 'react'

const ResetColors = ({ onSubmit }) => {
  return (
    <form
      className="dib"
      onSubmit={e => {
        e.preventDefault()
        onSubmit()
      }}
    >
      <button className="f6 fw3 link dim br-pill ba ml2 ph2 pv1 mb2 dib bg-near-white navy">
        Reset
      </button>
    </form>
  )
}

export default ResetColors
