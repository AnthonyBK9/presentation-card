import React from 'react'
import Author from './Author'
import Button from './Button'

const QuoteBox = ({userRandom, colorRandom, result}) => {
    const appStyle = {
        color: colorRandom
      }
    
  return (
    <div className="container">
        <article className="card" style={appStyle}>
            <div className="card-header">
                <i className="fa-solid fa-quote-left"></i>
                <p className="card-text">{userRandom.quote}</p>
            </div>
            <Author 
              userRandom={userRandom}
            />
            <Button 
              colorRandom={colorRandom}
              result={result}
            />
        </article>
    </div>
  )
}

export default QuoteBox