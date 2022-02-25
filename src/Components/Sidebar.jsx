import React from 'react'
import Traditional from '../Pages/Traditional'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <div className="relative min-h-screen md:flex">

            <div className="sidebar bg-gray-800 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
                <Link to="/dashboard" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-800 hover:text-white">
                    Dashboard
                </Link>
                <Link to="/traditional" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-800 hover:text-white">
                    Traditional
                </Link>
                <Link to="/gold" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-800 hover:text-white">
                    Gold
                </Link>
            </div>
        </div>
    )
}

export default Sidebar
