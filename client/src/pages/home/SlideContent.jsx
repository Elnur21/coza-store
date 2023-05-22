import React from 'react'

export default function SlideContent(props) {
    const [buttonHover, setButtonDarkHover] = React.useState(false)
    const toggleButton=()=>{
        setButtonDarkHover(!buttonHover)
    }
    return (
        <div className='w-75 row'>
            <div className='col-lg-6 text-start py-5'>
                <h5 className='pt-5 mt-5'>{props.info}</h5>
                <h1 className='py-3'>{props.name}</h1>
                <button onMouseEnter={toggleButton} onMouseLeave={toggleButton} className={'btn text-white rounded-pill mb-5 '+(buttonHover?'bg-dark':'bg-primary')}>
                    SHOP NOW
                </button> <br/><br/><br/><br/><br/>
            </div>
            <div className='col-lg-6'>
            </div>
        </div>
    )
}
