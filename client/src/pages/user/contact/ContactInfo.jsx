import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function ContactInfo({ contactIcon, contactHead, index, contactInfo }) {
    return (
        <div className='d-flex justify-content-center gap-4'>
            <div className='h4'>
                <FontAwesomeIcon icon={contactIcon} />
            </div>
            <div className='w-50'>
                <h4 className='mb-3'>{contactHead}</h4>
                <p className={index < 1 ? "text-muted" : "text-primary"}>{contactInfo}</p>
            </div>
        </div>
    )
}
