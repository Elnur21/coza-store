import React from 'react'
import { Link } from 'react-router-dom'

export default function Featured(props) {
    return (
        <div className='d-flex justify-content-between'>
            <div className='col-lg-4 col-md-4 col-sm-4'>
               <Link to={`/${props.blogLink}`} className={props.imageWidth} onClick={props.click}><img src={props.featureImage} alt="feature_product" className={props.imageWidth}/></Link>
            </div>
            <div className='col-lg-7 col-md-6 col-sm-7 py-2'>
                <Link to="/blog" className='text-decoration-none text-dark'><h6>{props.featureHeader}</h6></Link>
                <p className='pt-3 text-muted'>{props.featurePrice}</p>
            </div>
        </div>
    )
}
