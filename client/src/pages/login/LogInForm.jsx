import React, { useContext, useState } from 'react'
import { faFacebook, faGithub, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { UserContext } from '../../context/UserContext';
import { loginUser } from '../../api/requests';

const LogInForm = () => {
    const [password, setPassword] = useState(false)
    const navigate = useNavigate();
    const { users, sweetAlert, getUser } = useContext(UserContext);
    const handleSubmit = async (values) => {
        const user = users.some((user) => user.email === values.email);

        if (!user) {
            sweetAlert("Oops...", "Email is not correct.", "warning");
            return;
        }

        try {
            // Make an HTTP POST request to your backend endpoint for password verification
            await loginUser(values).then((response) => {
                const { isValidPassword } = response.data;
                setPassword(isValidPassword)
            })
                .catch((error) => {
                    console.log(error);
                });

            if (password === false) {
                sweetAlert("Robot test", "Click log in again if your password is correct", "warning");
            } else {
                getUser(values.email);
                sweetAlert("Log in", "You logged in successfully.", "success");
                navigate('/');
            }
        } catch (error) {
            console.error(error);
        }
    };
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required')
    });
    return (
        <div className='my-5 pb-5'>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form className='loginform mb-5 pb-5'>
                    {/* Email input */}
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor='email'>Email address</label>
                        <Field
                            type="email"
                            id="email"
                            name="email"
                            className="form-control form-control-lg"
                            placeholder="Enter your email"
                        />
                        <ErrorMessage name="email" component="div" className="text-danger" />
                    </div>

                    {/* Password input */}
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="password">Password</label>
                        <Field
                            type="password"
                            id="password"
                            name="password"
                            className="form-control form-control-lg"
                            placeholder="Enter your password"
                        />
                        <ErrorMessage name="password" component="div" className="text-danger" />
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
                    <button type="submit" className="btn btn-primary btn-block mb-4 col-12">Log in</button>
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
                </Form>
            </Formik>
        </div>
    )
}

export default LogInForm