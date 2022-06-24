import React from 'react'
import './image.css'

export default function ImageCard({title, ...props}) {
  return (
    <div className="image-card">
        <img {...props} width='90px' height='90px' alt='asdsa'/>
        <div className="image-body">
            <a {...props}><h5 className="image-title">{title}</h5></a>
        </div>
    </div>
  )
}