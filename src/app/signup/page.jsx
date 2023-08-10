"use client"

import React from 'react'
import Link from 'next/link'
import axios from 'axios'
import {toast, Toaster} from 'react-hot-toast'

const RegisterPage = () => {
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(name, email, password);
        try {
            const res = axios.post('/api/auth/register', {
                name, email, password
            })
                .then((res) => {
                    toast.success("User created successfully.")
                })
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="flex h-screen bg-gray-100">
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            {/* Image Section */}
            <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('/login.jpg')" }}></div>

            {/* Login Section */}
            <div className="w-1/2 flex flex-col justify-center items-center p-8">
                <h1 className="text-3xl font-semibold mb-4">Register</h1>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Name</label>
                    <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" name="name" placeholder="John Doe" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Email</label>
                    <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder="johndoe@example.com" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-600">Password</label>
                    <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="**********" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                </div>
                <button onClick={handleSubmit} className="w-1/5 mb-1 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out">
                    Register
                </button>
                <p>Already have an account? click <Link className="text-blue-700" href="/login">here to login</Link></p>
            </div>
        </div>
    )
}

export default RegisterPage