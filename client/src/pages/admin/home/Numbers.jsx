import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Numbers = ({ count, name, icon,color }) => {
    return (
        <div className={`row bg-${color} text-white w-100 p-3 rounded-3 shadow-lg`}>
            <div className="col-6 display-3 d-flex justify-content-center align-items-center">
                <FontAwesomeIcon icon={icon} />
            </div>
            <div className="col-6 text-center">
                <h3>The number of {name}</h3>
                <p className='display-4'>{count}</p>
            </div>
        </div>
    )
}

export default Numbers