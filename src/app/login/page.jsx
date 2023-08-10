"use client"
import axios from 'axios'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import React from 'react'
import { toast, Toaster } from 'react-hot-toast'

const LoginPage = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(email, password);
        try {
            const res = axios.post('/api/auth/login', {
                email, password
            })
            toast.success("User logged in successfully")

            window.location.href = "/dashboard";
        }
        catch (e) {
            console.log(e);
        }
    }
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e);
        }
    };
    return (
        <div className="flex h-screen bg-gray-100">
            <Toaster position="top-right" reverseOrder={false} />
            {/* Image Section */}
            <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('/login.jpg')" }}></div>

            {/* Login Section */}
            <div className="w-1/2 flex flex-col justify-center items-center p-8">
                <h1 className="text-3xl font-semibold mb-4">Login</h1>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Email</label>
                    <input onKeyPress={handleKeyPress} value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-600">Password</label>
                    <input onKeyPress={handleKeyPress} value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                </div>
                <button onClick={handleSubmit} className="w-1/5 mb-1 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out">
                    Login
                </button>
                <p>Don&apos;t have an account? click <Link className="text-blue-700" href="/signup">here to register</Link></p>
            </div>
        </div>
    )
}

export default LoginPage