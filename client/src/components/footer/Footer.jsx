import { faFacebookF, faInstagram, faPinterestP } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import PayPal from "../../assets/image/PayPal.webp"
export default function Footer() {
    return (
        <div>
            <footer className="text-center text-lg-start bg-dark pt-5 text-white">
                <section className="d-flex justify-content-center">
                    <div className="w-75 text-center text-md-start mt-5">
                        <div className="row mt-3 d-flex justify-content-between">
                            <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    CATEGORIES
                                </h6>
                                <p>
                                    <Link to="/" className="text-decoration-none text-muted">Women</Link>
                                </p>
                                <p>
                                    <Link to="/" className="text-decoration-none text-muted">Men</Link>
                                </p>
                                <p>
                                    <Link to="/" className="text-decoration-none text-muted">Shoes</Link>
                                </p>
                                <p>
                                    <Link to="/" className="text-decoration-none text-muted">Watches</Link>
                                </p>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    HELP
                                </h6>
                                <p>
                                    <Link to="/" className="text-decoration-none text-muted">Track Order</Link>
                                </p>
                                <p>
                                    <Link to="/" className="text-decoration-none text-muted">Returns</Link>
                                </p>
                                <p>
                                    <Link to="/" className="text-decoration-none text-muted">Shipping</Link>
                                </p>
                                <p>
                                    <Link to="/" className="text-decoration-none text-muted">FAQs</Link>
                                </p>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    GET IN TOUCH
                                </h6>
                                <p className='text-muted'>
                                    Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
                                </p>
                                <p className='d-flex gap-3 fs-5'>
                                    <Link to="/" className='text-muted'><FontAwesomeIcon icon={faFacebookF} /></Link><Link className='text-muted' to="/"><FontAwesomeIcon icon={faInstagram} /></Link><Link className='text-muted' to="/"><FontAwesomeIcon icon={faPinterestP} /></Link>
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    NEWSLETTER
                                </h6>
                                <p>
                                    <input type="email" placeholder='email@example.com' className='bg-transparent btn text-start shadow-none border-bottom ps-0 pe-5' />
                                </p>
                                <p>
                                    <button className='btn btn-primary rounded-pill px-5 py-2'>SUBSCRIBE</button>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <p className='text-center mt-5'><img src={PayPal} alt='PayPal' /><img src={PayPal} alt='PayPal' /><img src={PayPal} alt='PayPal' /><img src={PayPal} alt='PayPal' /><img src={PayPal} alt='PayPal' /></p>
                <div className="text-center text-muted p-5 pt-0">
                    Copyright ©2022 All rights reserved | This template is made with <FontAwesomeIcon icon={faHeart} /> by <Link className="text-decoration-none" to="/">Colorlib</Link>
                </div>
            </footer>
        </div>
    )
}
