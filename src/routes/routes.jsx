import React from "react";
import { createHashRouter, createRoutesFromElements, Route } from 'react-router-dom';
import LoginPage from "../pages/log-in/Login.jsx";
import SignupPage from "../pages/sign-up/Signup";

const router = createHashRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="signup" element={<SignupPage />}></Route>
        </>
        
    )
);


export default router;