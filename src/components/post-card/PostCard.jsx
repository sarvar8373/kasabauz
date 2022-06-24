import React from 'react'
import './post.css'

export default function PostCard({title, text, ...props}) {
  return (
    <div className="post-card">
        <img {...props}  alt='asdsa'/>
        <div className="post-body">
            <h5 className="post-title">{title}</h5>
            <p className="post-text">{text}</p>
        </div>
    </div>
  )
}
