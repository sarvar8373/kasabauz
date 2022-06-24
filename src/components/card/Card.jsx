import React from 'react'
import './card.css'

export default function Card({title, text, ...props}) {
  return (
    <div className="card">
        <img className="card-img-top" {...props} width='100px' height='100px' alt='asdsa'/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
        </div>
    </div>
  )
}
