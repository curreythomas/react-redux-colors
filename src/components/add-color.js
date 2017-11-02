import React from 'react'

const AddColor = ({ value, onChange, onSubmit }) => {
  return (
    <form
      className="dib"
      onSubmit={e => {
        e.preventDefault()
        onSubmit(value)
      }}
    >
      <input
        className="input-reset br2 ba h2 bg-near-white dib"
        placeholder="Add a Color"
        value={value}
        onChange={onChange}
      />
      <button className="f6 fw3 link dim br-pill ba ml2 ph2 pv1 mb2 dib bg-near-white navy">
        Add
      </button>
    </form>
  )
}

export default AddColor
