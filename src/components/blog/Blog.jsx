import React from 'react'
import './blog.css'

export default function Blog({title, ...props}) {
  return (
        <div className="blog-card">
            <img {...props} width='100px' height='100px' alt='post'/>
            <h5 className="blog-title">{title}</h5>
        </div>
  )
}
