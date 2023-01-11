import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import '../../App.css';
import { Link } from 'react-router-dom';
import { Divider } from '@mui/material';
import { FaGooglePlusSquare, FaFacebookSquare, FaLinkedin } from 'react-icons/fa'


const LoginSchema = yup.object().shape({
    email: yup.string().email('Enter a valid email').required('Email is required'),
    password: yup.string().required('Password is required').min(8, 'Most be 8 or more characteres and contain at least 1 number and 1 special character.')
})

function LoginPage() {

    return (
        <div className='login'>
            <section className="form">

                <h1 className='title'>LOGIN</h1>

                <Formik initialValues={{ email: " ", password: " " }} validationSchema={LoginSchema} onSubmit={async (values) => await new Promise((resolve) => setTimeout(resolve, 500)).then(console.log(values))}>

                    {({ errors, touched }) =>

                        <Form className="form-control">

                            <div className='user-email'>
                                <label htmlFor='email'>Email</label>
                                <Field id="email" name="email" type="email" />
                                {errors.email && touched.email ? <p id="erro">{errors.email}</p> : null}
                            </div>

                            <div className='user-password'>
                                <label htmlFor='password'>Password</label>
                                <Field id="password" name="password" type="password" />
                                {errors.password && touched.password ? <p id="erro">{errors.password}</p> : null}
                            </div>

                            <div className='reminder-box'>
                                <Field id="remember" type="checkbox" checked="false" />
                                <label htmlFor='remember'> Remember me?</label>
                            </div>


                            <button className='button' type='submit'>LOGIN</button>

                            <Link className='forgot' to='/'>Forgot Password?</Link>


                            <div className="divider">
                                <Divider>OR</Divider>
                            </div>

                            <div className="social-login">
                                <FaGooglePlusSquare className='icon' onClick={() => alert('Login with Google')} color='rgb(219, 42, 42)' />
                                <FaFacebookSquare className='icon' onClick={() => alert('Login with Facebook')} color='rgb(50, 50, 204)' />
                                <FaLinkedin className='icon' onClick={() => alert('Login with LinkedIn')} color='rgb(84, 84, 226)' />
                            </div>

                            <div className='account'>
                                Need an account?<Link to="signup" className='register' > SING UP</Link>
                            </div>

                        </Form>
                    }

                </Formik>
            </section>
        </div>
    )
};

export default LoginPage;
