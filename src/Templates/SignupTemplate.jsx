import React, {useState} from "react";
import SignupForm from "../Atoms/SignupForm";
import LoginButton from "../Atoms/LoginButton";
import {useNavigate} from "react-router-dom";

const SignupTemplate = () => {
    const navigate = useNavigate();
    const [state, setState] = useState({});
    const callbacks = {
        onResponse: (data) => {
            setState(data);
            if(data.email)
                navigate('/login')
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <SignupForm id='register-form' callbacks={callbacks}/>
            <div
                class="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border my-7 py-4">
                <div
                    class="relative grid mx-4 mb-4 -mt-6 overflow-hidden shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-tr from-gray-900 to-gray-800 bg-clip-border shadow-gray-900/20">
                    <h3 class="font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-center align-middle text-white">
                        <span className="inline-block align-middle">Sign Up</span>
                    </h3>
                </div>
                <div className="flex flex-col gap-4 p-6">
                    <div className="relative h-11 w-full min-w-[200px]">
                        <input
                            form="register-form"
                            name="name"
                            className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder="John Wick" type="text" required/>
                        {(!state.success && state.error?.name ? <p>{state.error?.name[0]}</p> : '')}
                    </div>
                    <div className="relative h-11 w-full min-w-[200px]">
                        <input
                            form="register-form"
                            name="email"
                            className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder="john.wick@example.com" type="email" required/>
                        {(!state.success && state.error?.email ? <p>{state.error?.email[0]}</p> : '')}
                    </div>
                    <div className="relative h-11 w-full min-w-[200px]">
                        <input
                            form="register-form"
                            name="password"
                            className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                            placeholder="Password" type="password" required/>
                        {(!state.success && state.error?.password ? <p>{state.error?.password[0]}</p> : '')}

                    </div>
                    <div className="relative h-11 w-full min-w-[200px]">
                        <LoginButton form="register-form">
                            Sign Up
                        </LoginButton>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default SignupTemplate;