import React from 'react'
import Breadcrumb from '../component/Breadcrumb'
import dataBlog from '../acesse/fakeData/Blog'

const Blog = () => {
    document.title = 'Blog'
  
    return (
        <div className="blog">
            
            <div className="blog__container">
            <Breadcrumb title="Blog"/>
                
             <div className="blog__container__content">
             {
                   dataBlog.map((blog,index) => (
                      <div key={index}> 
                           <img src={blog.wallpaper} alt="" />
                           <h2>{blog.title}</h2>
                      </div>
                   ))
              }
             </div>
            
            </div>
        </div>
    )
}



export default Blog
