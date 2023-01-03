import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import LoginPage from "./pages/login/Login";
import SignupPage from "./pages/signup/Signup";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="signup" element={<SignupPage />}></Route>
        </>
        
    )
);


export default router;