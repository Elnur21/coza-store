import React from 'react'

const LoginForgetPassword = () => {
    return (
        <div className='my-5 py-5 container'>
            <h3 className='fw-bold text-center'>Write your email</h3>
            <form className='margin-auto my-5 py-5 w-50'>
                <div className="form-outline">
                    <label className="form-label" htmlFor='forgetPassword'>Enter your email adress:</label><br />
                    <input required id="forgetPassword" type="email" placeholder='example@gmail.com' className="form-control" /><br />
                    <button type='submit' className='btn btn-primary'>Send message</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForgetPassword