import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCartShopping, faClose } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/image/download.webp'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

export default function Navbar(props) {
    const [hamburgerMenu, setHamburgerMenu] = useState(true);
    const toggleHamnurgerMenu = () => {
        setHamburgerMenu(!hamburgerMenu)
    }
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-light w-100 ${windowSize.innerWidth >= 992 ? " d-none" : " "}`}>
                <div className="container-fluid w-100 mx-0 px-0">
                <Link className="navbar-brand ps-3 pe-0 mx-0 col-sm-2" to="/">
                        <img src={logo} alt="logo" className='w-sm-100'/>
                    </Link>
                    <div className='d-flex gap-4 justify-content-end align-items-center px-3 col-sm-6'>
                        <FontAwesomeIcon icon={faSearch} className="fs-5" onClick={props.clickSearch} />
                        <span ><FontAwesomeIcon onClick={props.clickCart} icon={faCartShopping} className="fs-5 text-secondary" /><span className="h-50 translate-middle badge bg-primary px-1">{props.cart.length+3}</span></span>
                        <Link to="/"><FontAwesomeIcon icon={faHeart} className="fs-5 text-secondary" /><span className="h-50 translate-middle badge bg-primary px-1">0</span></Link>
                        <button onClick={toggleHamnurgerMenu} className="navbar-toggler btn shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            {
                                hamburgerMenu ? <span className="navbar-toggler-icon"></span> : <FontAwesomeIcon icon={faClose} className="py-1 px-2" />
                            }
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className='bg-dark d-flex justify-content-center'>
                            <div className='d-flex flex-column justify-content-start w-100'>
                                <div className='col-lg-4 d-flex align-items-center text-secondary px-3 pt-3'>
                                    Free shipping for standard order over $100
                                </div> <hr className='text-muted'/>
                                <div className='col-lg-4 '>
                                    <ul type="none" className='d-flex mb-3 px-3'>
                                        <li className='py-2 border-0 border-start border-secondary px-3'><Link className='text-decoration-none text-secondary' to="/">Help & FAQs</Link></li>
                                        <li className='py-2 border-0 border-start border-secondary px-3'><Link className='text-decoration-none text-secondary' to="/">My Account</Link></li>
                                        <li className='py-2 border-0 border-start border-secondary px-3'><Link className='text-decoration-none text-secondary' to="/">EN</Link></li>
                                        <li className='py-2 border-0 border-start border-end border-secondary px-3'><Link className='text-decoration-none text-secondary' to="/">USD</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <ul type="none" className='px-3 navbar-nav me-auto mb-2 mb-lg-0 pt-2 bg-primary'>
                            <li className='nav-item active'><Link className='nav-link text-decoration-none text-white fw-bold' aria-current="page" to="/">Home</Link></li>
                            <li className='nav-item'><Link className='nav-link text-decoration-none text-white fw-bold' to="/shop">Shop</Link></li>
                            <li className='nav-item d-flex'><Link className='nav-link text-decoration-none text-white fw-bold' to="/features">Features</Link><span className="h-100 badge rounded-pill bg-danger">HOT</span></li>
                            <li className='nav-item'><Link className='nav-link text-decoration-none text-white fw-bold' to="/blog">Blog</Link></li>
                            <li className='nav-item'><Link className='nav-link text-decoration-none text-white fw-bold' to="/about">About</Link></li>
                            <li className='nav-item'><Link className='nav-link text-decoration-none text-white fw-bold' to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <nav className={`${windowSize.innerWidth>=992?" ":" d-none"}`}>
                <div className={`bg-dark d-flex justify-content-center`}>
                    <div className='d-flex justify-content-between w-75'>
                        <div className='col-lg-4 d-flex align-items-center text-secondary'>
                            Free shipping for standard order over $100
                        </div>
                        <div className='col-lg-4 '>
                            <ul type="none" className='d-flex m-0'>
                                <li className='py-2 border border-secondary px-3'><Link className='text-decoration-none text-secondary' to="/">Help & FAQs</Link></li>
                                <li className='py-2 border border-secondary px-3'><Link className='text-decoration-none text-secondary' to="/">My Account</Link></li>
                                <li className='py-2 border border-secondary px-3'><Link className='text-decoration-none text-secondary' to="/">EN</Link></li>
                                <li className='py-2 border border-secondary px-3'><Link className='text-decoration-none text-secondary' to="/">USD</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={'d-flex justify-content-center'}>
                    <div className='d-flex mt-4 w-75 justify-content-between'>
                        <div className='d-flex'>
                            <Link to="/">
                                <img src={logo} alt="logo" />
                            </Link>
                            <ul type="none" className='d-flex gap-4'>
                                <li><Link className='text-decoration-none text-secondary' to="/">Home</Link></li>
                                <li><Link className='text-decoration-none text-secondary' to="/shop">Shop</Link></li>
                                <li><Link className='text-decoration-none text-secondary' to="/features">Features</Link><span className="h-100 position-relative badge bottom-50 translate-middle rounded-pill bg-danger">
                                    HOT
                                </span></li>
                                <li><Link className='text-decoration-none text-secondary' to="/blog">Blog</Link></li>
                                <li><Link className='text-decoration-none text-secondary' to="/about">About</Link></li>
                                <li><Link className='text-decoration-none text-secondary' to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className='d-flex gap-4'>
                            <FontAwesomeIcon icon={faSearch} className="fs-5" onClick={props.clickSearch} />
                            <span ><FontAwesomeIcon onClick={props.clickCart} icon={faCartShopping} className="fs-5 text-secondary" /><span className="h-50 translate-middle badge bg-primary px-1">{props.cart.length+3}</span></span>
                            <span><FontAwesomeIcon icon={faHeart} onClick={props.clickLike} className="fs-5 text-secondary" /><span className="h-50 translate-middle badge bg-primary px-1">{props.likes.length}</span></span>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}