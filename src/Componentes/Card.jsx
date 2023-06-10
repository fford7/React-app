import React from 'react'

function Card({id, title, url}) {
  return (
    <div>
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}

export default Card