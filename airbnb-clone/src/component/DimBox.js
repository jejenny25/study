import React from 'react'

const DimBox = (props) => {

  return (
    <div className={`dim ${props.isactive ? "is-active" : ""}`} onClick={props.onClick}></div>
  )
}

export default DimBox