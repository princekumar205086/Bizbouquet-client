import React, { useState } from 'react'
import '../Dashboard/Dashboard.css'
import { Link, useNavigate } from 'react-router-dom';
export default function Dashboard() {
    // let list = document.querySelectorAll('.navigation li');
    let logo = document.querySelector('.college-logo');
    //active link hook
    const [activeLink, setactiveLink] = useState('')

    const setActive = () =>{
        setactiveLink('hovered')
    }
    // 
    let navigation = document.querySelector('.navigation');
    let main = document.querySelector('.main');

    const active = () => {
        navigation.classList.toggle('active');
        main.classList.toggle('active');
        logo.classList.toggle('collapsed');
    }
    // End Active toggle code

    // logout implementatin
    const navigate = useNavigate()
    const logout =()=>{
        navigate('/home')
    }
    return (
        <>

            <div className="sidebar-container">
                <div className="navigation">
                    <ul>
                        <Link className="college-logo" to="/">
                            Bizboquet
                        </Link>
                        <li className={activeLink} onMouseOver={setActive} >
                            <Link to="/">
                                <span className="icon"><ion-icon name="grid-outline"></ion-icon></span>
                                <span className="title">Dashboard</span>
                            </Link>
                        </li>
                        <li className={activeLink} onMouseOver={setActive} >
                            <Link to="/">
                                <span className="icon"><ion-icon name="book-outline"></ion-icon></span>
                                <span className="title">Manage profile</span>
                            </Link>
                        </li>
                        <li className={activeLink} onMouseOver={setActive} >
                            <Link to="/">
                                <span className="icon"><ion-icon name="alert-circle-outline"></ion-icon></span>
                                <span className="title">Manage listing</span>
                            </Link>
                        </li>
                        <li className={activeLink} onMouseOver={setActive} >
                            <Link to="/">
                                <span className="icon"><ion-icon name="document-outline"></ion-icon></span>
                                <span className="title">Setting</span>
                            </Link>
                        </li>
                        <li className={activeLink} onMouseOver={setActive} >
                            <Link to="/">
                                <span className="icon"><ion-icon name="log-out-outline"></ion-icon></span>
                                <span className="title" onClick={logout}>Sign-out</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="main">
                <div className="topbar">
                    <div className="toggle" onClick={active}>
                        <ion-icon name="menu-outline"></ion-icon>
                    </div>
                    <div className="search">
                        <label for="">
                            <input type="text" id="" name="search" placeholder="Search here" />
                            <ion-icon name="search-outline"></ion-icon>
                        </label>
                    </div>
                    <div className="user">
                        <img src="Assets/user.jpg" alt="user" />
                    </div>
                </div>
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-3">
                                <div className="card text-center bg-success text-white">
                                    <div className="card-body p-5">
                                        <h2>50+</h2>
                                    </div>
                                    <div className="card-footer bg-light text-dark">
                                        <p>Listed business</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card text-center bg-primary text-white">
                                    <div className="card-body p-5">
                                        <h2>500+</h2>
                                    </div>
                                    <div className="card-footer bg-light text-dark">
                                        <p>Faetures Location</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card text-center bg-warning text-white">
                                    <div className="card-body p-5">
                                        <h2>20+</h2>
                                    </div>
                                    <div className="card-footer bg-light text-dark">
                                        <p>Category</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="card text-center bg-secondary text-white">
                                    <div className="card-body p-5">
                                        <h2>100+</h2>
                                    </div>
                                    <div className="card-footer bg-light text-dark">
                                        <p>Users</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="container">
                        <div className="row">
                            <div className="card p-0 my-center text-center">
                                <div className="card-header bg-info text-white">
                                    <h2>Welcome you in business directory</h2>
                                </div>
                                <div className="card-body">
                                    <blockquote className="blockquote mb-0">
                                        <p>Sky is not heavy, If the heart be light!</p>
                                        <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
