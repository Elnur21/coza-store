import React from 'react'

export default function Banner(props) {
    return (
        <div className='row border px-4 col-lg-4 col-md-5 col-sm-12 my-3 me-md-5 me-sm-0 me-lg-0' style={{backgroundImage:"url("+props.imgSource+")", backgroundSize:"100% 100%", height:"270px"}}>
            <div className='col-lg-6 text-start'>
                <h3 className='text-dark fw-bold pt-4'>{props.name}</h3>
                <p className='text-secondary'>{props.info}</p><br /><br /><br /><br /><br />
                <button className='btn btn-primary rounded-pill mb-5 text-decoration-underline d-flex align-items-center'>
                    <span>SHOP</span> <span className='text-primary'>s</span> <span>NOW</span>
                </button> 
            </div>
            <div className='col-lg-6'>
                <img src={props.imgSource} alt='slideImage' className='w-100 h-100 opacity-0'/>
            </div>
        </div>
    )
}
