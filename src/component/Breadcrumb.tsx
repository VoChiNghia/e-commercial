import React from 'react'

interface props{
    title: string
}
const Breadcrumb = ({title}:props) => {
    return (
        <div className="breadcrumb">
         <div className="breadcrumb__container">
            <i className="fas fa-home"></i>
            <span>{`>`}</span>
            <span>{title}</span>
         </div>
      </div>
    )
}



export default Breadcrumb
