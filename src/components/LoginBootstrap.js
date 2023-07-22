import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../firebase/firebase.init';


const auth = getAuth(app);
const LoginBootstrap = () => {
    const [userEmail, setUserEmail] = useState('')
    const [success, SetSuccess] = useState(false)
    const handleSubmit = event => {
        event.preventDefault();
        SetSuccess(false)

        const form = event.target;
        const email = form.email.value; 
        const password = form.password.value;
        console.log(email, password);

        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            SetSuccess(true)
            form.reset();
        })
        .catch(error => {
            console.error('error', error)
        })
    };
    const handleEmailBlur = event => {
        if (!userEmail) {
            alert('Please enter your email address')
            return;
        }
        const email = event.target.value;
        setUserEmail(email)
    }
    const handleForgetPassword = () =>{
        sendPasswordResetEmail(auth, userEmail)
        .then(()=> alert('Password reset email sent. Please check your email'))
        .catch(error => console.error(error))

    }

    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-success'>Please Login</h3>
            <form onSubmit={handleSubmit}> 
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Example label</label>
                    <input onBlur={handleEmailBlur} type="email" name='email' className="form-control" id="formGroupExampleInput" placeholder="Your Email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Another label</label>
                    <input type="password" name='password' className="form-control" id="formGroupExampleInput2" placeholder="Your Password" />
                </div>
                <button className='btn btn-primary' type="submit">Login</button>
            </form> 
            {success && <p>Successfully login to the account</p>}
            <p>New to this website? Please <Link to="/register">Register</Link></p>
            <p>Forget Password? Please <button type='button' onClick={handleForgetPassword} className="btn btn-link">Reset Password</button></p>
        </div>
    );
};

export default LoginBootstrap;