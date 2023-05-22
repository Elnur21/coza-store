import React from 'react'

export default function Header(props) {
  return (
    <div className='d-flex justify-content-center align-items-center text-white' style={{backgroundImage:`url(${props.backgroundImage})`, height: "239px"}}>
        <h1 className='fw-bold'>{props.pageName}</h1>
    </div>
  )
}
