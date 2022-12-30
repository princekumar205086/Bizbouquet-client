import { Link } from "react-router-dom"
import React from 'react'
export default function NotFound() {
    return (
        <div>
            <h1>404 Error, Oops! You seem to be lost.</h1>
            <p>Here are some helpful links:</p>
            <Link to='/'>Home</Link>
        </div>
    )
}