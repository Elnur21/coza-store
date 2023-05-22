import React from 'react'
import "../../assets/style/scrollTop.css"
export default function ScrollTop() {
    
  return (
    <div className='scrollTop position-fixed bg-primary px-3 py-2 bottom-0 end-0 me-5 fw-bold text-white opacity-25' onClick={()=>window.scrollTo(0, 0)}>
        &gt;
    </div>
  )
}
