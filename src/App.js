import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Search from "./pages/Search";
import Preferences from "./pages/Preferences";
import PrivateRoute from "./Atoms/PrivateRoute";
import AuthProvider from "./Providers/AuthProvider";
import React from "react";
import Signup from "./pages/Signup";

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route path="login" element={<Login/>}/>
                        <Route path="signup" element={<Signup/>}/>
                        <Route element={<PrivateRoute/>}>
                            <Route index element={<Home/>}/>
                            <Route path="search" element={<Search/>}/>
                            <Route path="preferences" element={<Preferences/>}/>
                        </Route>
                        <Route path="*" element={<NoPage/>}/>
                    </Route>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
