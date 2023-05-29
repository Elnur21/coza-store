import React from 'react'
import { Link } from 'react-router-dom'
import { baseUrl } from '../../../api/base_url';

export default function Banner(props) {
    const imageUrl = baseUrl + props.imgSource;

    return (
        <Link to='/shop' className='row text-decoration-none border px-4 col-lg-4 col-md-5 col-sm-12 my-3 me-md-5 me-sm-0 me-lg-0 banner' style={{ backgroundImage: "url(" + imageUrl + ")", backgroundSize: "100% 100%", height: "270px" }}>
            <div className='col-lg-6 text-start'>
                <h3 className='text-dark fw-bold pt-4'>{props.name}</h3>
                <p className='text-secondary pb-5'>{props.info}</p>
                <button className='btn mb-5 border-white border-top-0 border-start-0 border-end-0 px-0 border-3 border-dark-bottom pb-0 d-flex gap-1 align-items-center mt-5'>
                    <span>SHOP</span> <span>NOW</span>
                </button>
            </div>
            <div className='col-lg-6'>
            </div>
        </Link>
    )
}
