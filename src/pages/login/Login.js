import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import './Login.css';
import { Link } from 'react-router-dom';
import logo from '../../images/login-logo.jpg';


const LoginSchema = yup.object().shape({
    email: yup.string().email('Invalid Email!').required('Required!'),
    password: yup.string().required('Required!').min(8 , 'Min of 8 characters')
})

function LoginPage() {

    return (
            <div className='login'>
                <section className="logo">
                    <img src={logo} alt='imagen'></img>
                </section>
                <section className="form">
                    <h1 className='title'>LOGIN</h1>
                    <Formik initialValues={{ email: " ", password: " " }} validationSchema={LoginSchema} onSubmit={async (values) => await new Promise((resolve) => setTimeout(resolve, 500)).then(console.log(values))}>
                        {({ errors, touched }) =>
                            <Form className="form-control">
                                <div id='user-email'>
                                    <label htmlFor='email'><p>Email</p>
                                        <Field id="email" name="email" type="email" /></label>
                                    {errors.email && touched.email ? <span id="erro">{errors.email}</span> : null}
                                </div>
                                <div id='user-password'>
                                    <label htmlFor='password'><p>Password</p>
                                        <Field id="password" name="password" type="password" /></label>
                                    {errors.password && touched.password ? <span id="erro">{errors.password}</span> : null}
                                </div>
                                <a className='forgot'href='/'>Forgot password?</a>
                                <button className='button' type='submit'>Login</button>
                                <Link to="signup" className='register' >Don't have an account? Sign up </Link>
                            </Form>
                        }
                    </Formik>
                </section>
            </div>
    )
};

export default LoginPage;
