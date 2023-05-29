import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import "../../../assets/style/blog.css"
import { baseUrl } from '../../../api/base_url'
export default function BlogArticle(props) {
    const imageUrl = baseUrl + '/uploads/' + props.articleImage;

    return (
        <div className='position-relative'>
            <Link to={props.articleLink} className='text-decoration-none'>
                <img src={imageUrl} alt="article_image" className='w-100' />
                <div className='position-absolute top-0 mt-4 ms-4  start-0 bg-white text-dark article-date text-center p-2'>
                    <span className='h1 fw-bold'>
                        {props.day}
                    </span> <br />
                    <span>
                        {props.year}
                    </span>
                </div>
            </Link>
            <Link to={props.articleLink} className="text-decoration-none text-dark mt-4 d-block">
                <h2 className='fw-bold'>{props.articleHead}</h2>
            </Link>
            <p className='text-muted h6 mt-4'>{props.articleInfo}</p>
            <div className='row h6 justify-content-between mt-4 pb-5 col-sm-12'>
                <div className='col-lg-7 col-md-5'><span className='text-muted'>By</span> Admin |
                    StreetStyle, Fashion, Couple | {props.commentCount} Comments</div>
                <div className='col-lg-4 col-md-4 col-sm-12 d-flex justify-content-end'>
                    <Link to={props.articleLink} className="text-decoration-none text-dark">
                        Read more  <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                </div>
            </div>
        </div>
    )
}
