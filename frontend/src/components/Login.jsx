import React, { useState, useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from "../Axios/axios.js"
import TokenContext from '../context/TokenContext.js';
function Login() {
    const [formData, setFormData] = useState({});
    const { userToken, tokenDispatch, userDispatch } = useContext(TokenContext);
    const [error, setError] = useState();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post("/user/login", formData)
            tokenDispatch({ type: "SET_TOKEN", payload: result.data.token })
            userDispatch({ type: "SET_USER", payload: result.data.user })
            localStorage.setItem("authToken",JSON.stringify(result.data.token))
        } catch (error) {
            console.log(error);
            setError({ message: error.response.data.message })
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }
    return (
        <div>
            {userToken && <Navigate to="/" />}
            <section className="login-container">
                <div className="px-6 h-full text-gray-800">
                    <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
                        <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="w-full" alt="Sample" />
                        </div>
                        <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                            <form method='post' onSubmit={handleSubmit}>
                                <div>
                                    {error && (
                                        <div className="text-center border-2 border-green-600 p-2 mb-2 rounded-md bg-red-200 shadow-2xl">
                                            {error.message}
                                        </div>
                                    )
                                    }
                                </div>
                                {/* Email input */}
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        name='email'
                                        onChange={handleChange}
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="emailInput"
                                        placeholder="Email address" />
                                </div>
                                {/* Password input */}
                                <div className="mb-6">
                                    <input
                                        type="password"
                                        name='password'
                                        onChange={handleChange}
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="passInput"
                                        placeholder="Password" />
                                </div>
                                <div className="flex justify-between items-center mb-6">
                                    <Link
                                        to={"/forgotPassword"}
                                    >Forgot Password?</Link>
                                </div>
                                <div className="text-center lg:text-left">
                                    <button
                                        type="submit"
                                        onClick={handleSubmit}
                                        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                        Login
                                    </button>
                                    <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                        Don't have an account?
                                        <Link
                                            to={"/register"}
                                            className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out ml-5"
                                        >Register</Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Login;
