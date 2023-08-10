'use client'
import React from 'react'
const Dashboard = () => {
    
    const userName = "Aditya"
    const subscriptionStatus = "Active"
    return (
        <div className="flex h-screen justify-center items-center bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
                <div className="text-center">
                    <p className="text-lg font-medium">{userName}</p>
                    <p className="mt-1 text-sm text-gray-500">{subscriptionStatus} Subscription</p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard