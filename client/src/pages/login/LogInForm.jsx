import React from 'react'
import { faFacebook, faGithub, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LogInForm = () => {
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required')
    });
    return (
        <div className='my-5 pb-5'>
            <form className='loginform mb-5 pb-5'>
                {/* Email input */}
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor='email'>Email address</label>
                    <input type="email" id="email" className="form-control" placeholder='Enter email' />
                </div>

                {/* Password input */}
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input type="password" id="password" className="form-control" placeholder='Enter password' />
                </div>

                <div className="row mb-4">
                    <div className="col d-flex justify-content-center">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="checkbox"
                            />
                            <label className="form-check-label" htmlFor="checkbox"> Remember me </label>
                        </div>
                    </div>

                    <div className="col">
                        <Link to="/login/forgetpassword">Forgot password?</Link>
                    </div>
                </div>
                <button type="button" className="btn btn-primary btn-block mb-4 col-12">Log in</button>
                <div className="text-center">
                    <p>Not a member?
                        <Link to="/signup" className='ms-5'>Register</Link>
                    </p>
                    <p>or sign up with:</p>
                    <Link to="/" className="btn btn-floating text-dark fs-3 mx-1">
                        <FontAwesomeIcon icon={faFacebook} />
                    </Link>

                    <Link to="/" className="btn btn-floating text-dark fs-3 mx-1">
                        <FontAwesomeIcon icon={faGoogle} />
                    </Link>

                    <Link to="/" className="btn btn-floating text-dark fs-3 mx-1">
                        <FontAwesomeIcon icon={faTwitter} />
                    </Link>

                    <Link to="/" className="btn btn-floating text-dark fs-3 mx-1">
                        <FontAwesomeIcon icon={faGithub} />
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default LogInForm