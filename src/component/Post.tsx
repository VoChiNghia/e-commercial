import React from 'react'
import { Link } from 'react-router-dom'
import IPost from '../interface/IPost'
interface postData {
    post:IPost
}
const Post = ({post}:postData) => {
    return (
        <div className="post">
            <div className="post__container">
                <img src={post.img} alt="" />
                <div className="post__container__info">
                    <Link to="/">{post.name}</Link>
                    <p>{post.title}</p>
                    <Link to="/">Read more . . .</Link>
                </div>
                <div className="post__container__content">
                <i className="fas fa-comment"></i>
                <p>1 Comment</p>
                <i className="far fa-calendar"></i>
                <p>14 feb 12</p>
                </div>
            </div>
        </div>
    )
}


export default Post
