import React, { useState } from 'react';
import axios from "../../Axios/axios.js";

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true)
            setMessage("");
            setError("");
            const res = await axios.post("/forgotPassword/forgotPassword", {email})
            console.log(res);
            setMessage(res.data.message);
            console.log(res.data.message);
        } catch (error) {
            setError(error.response.data.message)
            console.log(error);
            console.log(error.response.data.message);
        }finally{
            setIsLoading(false)
        }
    }
    return (
        <div className="text-center">
            <h1 className="text-xl font-bold p-5">Forgot Password</h1>
            <form className="w-2/5 mx-auto p-5" onSubmit={handleSubmit}>
                <input type="email"
                    className="p-3 rounded-md shadow-lg w-full"
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                />
                <button className="p-2 rounded-md shadow-md bg-indigo-700 text-white px-5 mt-10 disabled:bg-indigo-500" disabled={isLoading}>Reset</button>
            </form>
            {
                message && <div className='mt-10 bg-green-700 mx-auto w-2/5 p-3 rounded-lg shadow-lg text-white text-lg'>
                    <p>
                        {message}
                    </p>
                </div>
            }
            {
                error && <div className='mt-10 bg-red-700 mx-auto w-2/5 p-3 rounded-lg shadow-lg text-white text-lg'>
                    <p>
                        {error}
                    </p>
                </div>
            }
        </div>
    );
}

export default ForgotPassword;