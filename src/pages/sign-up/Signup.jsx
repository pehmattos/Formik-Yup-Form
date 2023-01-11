import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import '../../App.css';
import { BiShow, BiHide } from 'react-icons/bi';
import { Divider } from '@mui/material';
import { FaGooglePlusSquare, FaFacebookSquare, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const SignupSchema = yup.object().shape({
    email: yup.string().email('Please enter a valid email address').required('Email is required'),
    password: yup.string().required('Password is required').min(8, 'Most be 8 or more characteres and contain at least 1 number and 1 special character.'),
    firstname: yup.string().required('FirstName is required!').max(8, '8 is the maximum number of letters allowed'),
    lastname: yup.string().required('LastName is required!').max(8, '8 is the maximum number of letters allowed')
})

function SignupPage() {
    const [visible, setVisible] = useState(false);

    const Switch = () => setVisible(!visible);


    return (
        <div className='signup'>
            <section className="form">
                <h1 className='title'>REGISTER</h1>
                <Formik initialValues={{ firstname: " ", lastname: " ", email: " ", password: " " }} validationSchema={SignupSchema} onSubmit={async (values) => await new Promise((resolve) => setTimeout(resolve, 500)).then(console.log(values))}>

                    {({ errors, touched }) =>
                        <Form className="form-control">

                            <div className='user-firstname'>
                                <label htmlFor='firstname'>First Name</label>
                                    <Field id="firstname" name="firstname" type="text" />

                                {errors.firstname && touched.firstname ? <span id="erro">{errors.firstname}</span> : null}

                            </div>

                            <div className='user-lastname'>
                                <label htmlFor='lastname'>Last Name</label>
                                    <Field id="lastname" name="lastname" type="text" />

                                {errors.lastname && touched.lastname ? <span id="erro">{errors.lastname}</span> : null}

                            </div>

                            <div className='user-email'>
                                <label htmlFor='email'>Email</label>
                                    <Field id="email" name="email" type="email" />

                                {errors.email && touched.email ? <span id="erro">{errors.email}</span> : null}
                            </div>

                            <div className='user-password'>
                                <label htmlFor='password'>Password</label>
                                <Field id="password" name="password" type={visible ? "text" : "password"} />
                                
                                {visible ? (<BiShow onClick={Switch} className="show"/>) : (<BiHide onClick={Switch} className="hide" />)}

                                {errors.password && touched.password ? <span id="erro">{errors.password}</span> : null}
                            </div>

                            <button className='button' type='submit'>Create Account</button>

                            <div className="divider">
                                <Divider>OR</Divider>
                            </div>

                            <div className="social-login">
                                <FaGooglePlusSquare className='icon' onClick={() => alert('Login with Google')} color='rgb(219, 42, 42)' />
                                <FaFacebookSquare className='icon' onClick={() => alert('Login with Facebook')} color='rgb(50, 50, 204)' />
                                <FaLinkedin className='icon' onClick={() => alert('Login with LinkedIn')} color='rgb(84, 84, 226)' />
                            </div>

                            <div className='account'>
                                Already a user?<Link to="/" className='register' > LOGIN</Link>
                            </div>
                        </Form>
                    }
                </Formik>
            </section>
        </div>
    )
};

export default SignupPage;
