import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import './Signup.css';


const SignupSchema = yup.object().shape({
    email: yup.string().email('Invalid Email!').required('Required!'),
    password: yup.string().required('Required!').min(8 , 'eight min'),
    firstname: yup.string().required('Required!').max(8, 'eight max'),
    lastname: yup.string().required('Required!').max(8, 'eight max')
})

function SignupPage() {

    return (
            <div className='signup'>
                <section className="logo">
                    <img src="./logosignup.png" alt='img'></img>
                </section>
                <section className="form">
                    <h1 className='title'>REGISTER</h1>
                    <Formik initialValues={{ firstname: " ", lastname: " ", email: " ", password: " " }} validationSchema={SignupSchema} onSubmit={async (values) => await new Promise((resolve) => setTimeout(resolve, 500)).then(console.log(values))}>

                        {({ errors, touched }) =>
                            <Form className="form-control">

                                <div id='user-firstname'>
                                    <label htmlFor='firstname'><p>First Name</p>
                                        <Field id="firstname" name="firstname" type="text" /></label>
                                    {errors.firstname && touched.firstname ? <span id="erro">{errors.firstname}</span> : null}
                                </div>

                                <div id='user-lastname'>
                                    <label htmlFor='lastname'><p>Last Name</p>
                                        <Field id="lastname" name="lastname" type="text" /></label>
                                    {errors.lastname && touched.lastname ? <span id="erro">{errors.lastname}</span> : null}
                                </div>

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

                               <a className='forgot' href='forgot'>Forgot password?</a>
                                <button className='button' type='submit'>Create Account</button>
                            </Form>
                        }
                    </Formik>
                </section>
            </div>
    )
};

export default SignupPage;
