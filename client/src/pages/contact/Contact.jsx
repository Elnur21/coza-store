import { faEnvelope, faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Header from '../../components/head/Header'
import headBack2 from "../../assets/image/headBack2.webp"
import ContactInfo from './ContactInfo'
import swal from 'sweetalert';
import "../../assets/style/googleMap.css"
export default function Contact() {
    const [characterLength, setCharacterLength] = useState("");
    const [emailRequired, setEmailRequired] = useState(true);
    const sweetAlert = (e) => {
        swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
        });
        e.preventDefault();
    }
    return (
        <section>
            <Header pageName="Contact" backgroundImage={headBack2} /><br /><br /><br /><br /><br />
            <div className='d-flex justify-content-center'>
                <div className='w-75 row'>
                    <div className='col-lg-6 border border-secondary d-flex justify-content-center p-5'>
                        <form className='w-100 px-4' onSubmit={sweetAlert}>
                            <h5 className='text-center mb-4'>Send Us A Message</h5>
                            <div className='d-flex'>
                                <button className='btn shadow-none border-secondary rounded-0 rounded-start border-end-0 p-3 pe-1'><FontAwesomeIcon icon={faEnvelope} /></button><input type="email" className='rounded-0 rounded-end p-3 ps-1 btn shadow-none text-start border-secondary border-start-0 w-100' placeholder='Your Email Adress' required={emailRequired} />
                            </div>
                            <textarea placeholder='How Can We Help?' onChange={e => setCharacterLength(e.target.value)} className={`p-3 w-100 btn text-start shadow-none border-secondary my-3 ${characterLength.length >= 20 ? "border border-danger" : ""}`} rows="6"></textarea>
                            <button type="submit" className='btn shadow-none bg-dark text-white rounded-pill py-2 w-100 mt-2' disabled={characterLength.length >= 20 && emailRequired ? true : false}>SUBMIT</button>
                        </form>
                    </div>
                    <div className='col-lg-6 d-flex flex-column justify-content-center border border-secondary'>
                        <ContactInfo contactIcon={faLocationPin} contactHead="Address" contactInfo="Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018 US" textColor="text-muted" />
                        <ContactInfo contactIcon={faPhone} contactHead="Lets Talk" contactInfo="+1 800 1236879" textColor="text-primary" />
                        <ContactInfo contactIcon={faEnvelope} contactHead="Address" contactInfo="contact@example.com" textColor="text-primary" />
                    </div>
                </div>
            </div><br /><br /><br /><br /><br />
            <div className="mapouter"><div className="gmap_canvas"><iframe className="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://www.kokagames.com/fnf-friday-night-funkin-mods/">FNF Mods</a></div></div>
        </section>
    )
}
