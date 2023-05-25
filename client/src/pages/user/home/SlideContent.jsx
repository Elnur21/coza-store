import React from 'react'

export default function SlideContent(props) {
    const [buttonHover, setButtonDarkHover] = React.useState(false)
    const toggleButton = () => {
        setButtonDarkHover(!buttonHover)
    }
    return (
        <div className='w-75 row vh-100'>
            <div className='col-lg-6 text-start h-100 d-flex align-items-center slider'>
                <div>
                    <p className='pb-0 mb-0 fs-3'>{props.info}</p>
                    <h1 className='py-3 fw-bold display-3'>{props.name}</h1>
                    <button onMouseEnter={toggleButton} onMouseLeave={toggleButton} className={'btn text-white rounded-pill mb-5 ' + (buttonHover ? 'bg-dark' : 'bg-primary')}>
                        SHOP NOW
                    </button>
                </div>
            </div>
            <div className='col-lg-6'>
            </div>
        </div>
    )
}
