import React from 'react'

const QuoteBox = ({userRandom, colorRandom, result}) => {
    const appStyle = {
        color: colorRandom
      }
    const buttonStyle = {
        backgroundColor: colorRandom
    }
  return (
    <div className="container">
        <article className="card" style={appStyle}>
            <div className="card-header">
                <i className="fa-solid fa-quote-left"></i>
                <p className="card-text">{userRandom.quote}</p>
            </div>
            
            <h2 className="card-title">{userRandom.author}</h2>
            <div className="button-f">
                <button className="btn-card" style={buttonStyle} onClick={result}><i className="fa-solid fa-chevron-right"></i></button>
            </div>
        </article>
    </div>
  )
}

export default QuoteBox