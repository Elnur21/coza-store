import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import "../../assets/style/blog.css"
export default function BlogArticle(props) {
    return (
        <div>
            <Link to={props.articleLink} className='position-relative text-decoration-none'>
                <img src={props.articleImage} alt="article_image" className='w-100'/>
                <div className='position-absolute bg-white text-dark article-date text-center p-2'>
                    <span className='h1 fw-bold'>
                        {props.day}
                    </span> <br />
                    <span>
                        {props.year}
                    </span>
                </div>
            </Link><br /><br /><br />
            <Link to={props.articleLink} className="text-decoration-none text-dark">
                <h2 className='fw-bold'>{props.articleHead}</h2>
            </Link><br />
            <p className='text-muted h6'>{props.articleInfo}</p>
            <div className='row h6 justify-content-between mt-4 col-sm-12'>
                <div className='col-lg-7 col-md-5'><span className='text-muted'>By</span> Admin |
                    StreetStyle, Fashion, Couple |
                    8 Comments</div>
                <div className='col-lg-4 col-md-4 col-sm-12 d-flex justify-content-end'>
                    <Link to={props.articleLink} className="text-decoration-none text-dark">
                        CONTINUE READING  <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                </div>
            </div><br/><br/><br/>
        </div>
    )
}
