import React from 'react'

const Author = ({userRandom}) => {
  return (
    <h2 className="card-title">{userRandom.author}</h2>
  )
}

export default Author