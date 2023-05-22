import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function ContactInfo(props) {
    return (
        <div className='d-flex justify-content-center gap-4'>
            <div className='h4'>
                <FontAwesomeIcon icon={props.contactIcon} />
            </div>
            <div className='w-50'>
                <h4 className='mb-3'>{props.contactHead}</h4>
                <p className={props.textColor}>{props.contactInfo}</p>
            </div>
        </div>
    )
}
