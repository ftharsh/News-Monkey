import React from 'react'

const NewsItem =(props)=> {
        let { title, description, imageUrl, newsUrl, author, date,source } = props;
        return (
            <div className='my-3'>
                <div className="card" >
                <div className="d-flex justify-content-end position-absolute" style={{right:0}} > <span className="badge bg-danger" >{source} </span> </div>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body" style={{color : "#070c57"}} >
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {author} on {date}</small> </p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read more...</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem
