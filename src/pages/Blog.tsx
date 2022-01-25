import React from 'react'
import Breadcrumb from '../component/Breadcrumb'

const Blog = () => {
    document.title = 'Blog'
    return (
        <div className="blog">
            
            <div className="blog__container">
            <Breadcrumb title="Blog"/>
                
                <h1>Blog</h1>
            
            </div>
        </div>
    )
}



export default Blog
