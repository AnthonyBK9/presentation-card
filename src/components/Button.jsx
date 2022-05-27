import React from 'react'

const Button = ({colorRandom, result}) => {
    const buttonStyle = {
        backgroundColor: colorRandom
    }
  return (
    <div className="button-f">
        <button className="btn-card" style={buttonStyle} onClick={result}><i className="fa-solid fa-chevron-right"></i></button>
    </div>
  )
}

export default Button