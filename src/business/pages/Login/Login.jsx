import React, { useState } from 'react'
import '../Login/Login.css'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";


export default function Login() {
    // defining api base_url
    const base_url = process.env.REACT_APP_BASE_URL
    // input hooks
    const inputdata = { fullname: '', email_id: '', contact: '', password: '', cpassword: '' }
    const [inputvalue, setInputvalue] = useState(inputdata)
    // handle input
    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInputvalue({ ...inputvalue, [name]: value })
    }
    // reseting form 
    // const resetForm = (e) => {
    //     const name = e.target.name
    //     const value = e.target.value
    //     setInputvalue({...inputvalue, [name]:value})
    // }
    // setting input variable here
    let { fullname, email_id, contact, password, cpassword } = inputvalue

    //setting up form error hooks
    const [fullnameError, setfullnameError] = useState(false);
    const [email_id_Error, setemail_id_Error] = useState(false);
    const [contactError, setcontactError] = useState(false);
    const [passwordError, setpasswordError] = useState(false);
    const [cpasswordError, setcpasswordError] = useState(false);

    //flaging input hooks
    const [fullnameflag, setfullnameflag] = useState('');
    const [emailflag, setemailflag] = useState('');
    const [contactflag, setcontactflag] = useState('');
    const [passwordflag, setpasswordflag] = useState('');
    const [cpasswordflag, setcpasswordflag] = useState('');

    /* 
        form validation from here...
        user register form validation
    */
    // validation for fullname
    const isFullname = () => {
        let re = /^[a-z A-Z]{2,30}$/;
        if (fullname.trim().length === 0) {
            setfullnameError('Fullname field is required!')
            setfullnameflag('is-invalid')
            return false;
        }
        else if (re.test(fullname.trim()) === false) {
            setfullnameError('Enter valid fullname!')
            setfullnameflag('is-invalid')
            return false;
        }
        else {
            setfullnameError("")
            setfullnameflag('is-valid')
            return true;
        }
    }
    // validation for email
    const isEmail = () => {
        let reg = /^[a-z 0-9]{1,}@[a-z]{2,10}[.]{1}[a-z]{2,5}$/;
        if (email_id.trim() === "") {
            setemail_id_Error('Email field is required!')
            setemailflag('is-invalid')
            return false;
        }
        else if (reg.test(email_id.trim()) === false) {
            setemail_id_Error('Enter a valid email!')
            setemailflag('is-invalid')
            return false;
        }
        else {
            setemail_id_Error("")
            setemailflag('is-valid')
            return true;
        }
    }
    // validation for contact
    const isContact = () => {
        let re = /^[6-9]\d{9}$/;
        if (contact.trim() === "") {
            setcontactError('Phone number field is required!')
            setcontactflag('is-invalid')
            return false;
        }
        else if (re.test(contact.trim()) === false) {
            setcontactError('Enter a valid phone number!')
            setcontactflag('is-invalid')
            return false;
        }
        else {
            setcontactError('')
            setcontactflag('is-valid')
            return true;
        }
    }
    // validation for password
    const isPassword = () => {
        let passreg = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
        if (password.trim().length === 0) {
            setpasswordError('Password field is required!')
            setpasswordflag('is-invalid')
            return false;
        }
        else if (passreg.test(password.trim()) === false) {
            setpasswordError('Password shoud be min length of 8, at least one uppercase, lowercase, number and special character!')
            setpasswordflag('is-invalid')
            return false;
        }
        else {
            setpasswordError('')
            setpasswordflag('is-valid')
            return true;
        }
    }
    // validation for confirm password
    const isCpassword = () => {
        if (cpassword.trim().length === 0) {
            setcpasswordError('Confirm password filed is required!')
            setcpasswordflag('is-invalid')
            return false;
        }
        else if (cpassword !== password) {
            setcpasswordError('Password didnot match, try again!')
            setcpasswordflag('is-invalid')
            return false;
        }
        else {
            setcpasswordError('')
            setcpasswordflag('is-valid')
            return true;
        }
    }

    // checking for validation
    const formValidation = () => {
        if (!isFullname() && !isEmail() && !isContact() && !isPassword() && !isCpassword()) {
            return false;
        }
        return true;
    }
    // handle submission of form 
    const hanleSubmitForm = () => {
        if (formValidation() === true) {
            //function for registring user using axios
            const registerUser = async () => {
                try {
                    const data = {
                        fullname: fullname,
                        email: email_id,
                        phone: contact,
                        password: password

                    }
                    await axios.post(`${base_url}register`, data)
                    //resetForm()
                    setInputvalue('')
                    toast.success("Registered successfully!")
                    otpForm()

                } catch (error) {
                    toast.error("Not registered successfully!")
                    console.log(error)
                }
            }
            registerUser()
        }
        else {
            toast.error("Please fill out this form!")
            isFullname()
            isEmail()
            isContact()
            isPassword()
            isCpassword()
            return false;
        }
    }

    // hooks for form hiding
    const [regclick, setregclick] = useState('')
    const [logclick, setlogclick] = useState('d-none')
    const [otpclick, setotpclick] = useState('d-none')

    //function for form hiding
    // registration form
    const regForm = () => {
        setregclick('d-none')
        setlogclick('')
    }
    // otp form
    const otpForm = () => {
        setregclick('d-none')
        setotpclick('')
    }
    // login form
    const logForm = () => {
        setregclick('')
        setlogclick('d-none')
    }

    // login form validation from here

    // hooks for login credentials
    const initialdetail = { logemail: '', logpassword: '' }
    const [loginDetail, setloginDetail] = useState(initialdetail)
    // handle login input
    const handleLogInput = (e) => {
        let name = e.target.name
        let value = e.target.value
        setloginDetail({ ...loginDetail, [name]: value })
    }
    //path setting
    let navigate = useNavigate()

    //setting input variable here
    let {logemail, logpassword} = loginDetail
    //Login email
    const loginUser = async () => {
        try {
            const data = {
                email: logemail,
                password: logpassword
            }
            const logsuccess = await axios.post(`${base_url}login`, data)
            if(logsuccess===true){
                navigate("/dashboard")
                toast.success("Sign in successfully!")
            }
            toast.error("Something went wrong!")
        } catch (error) {
            toast.error("Something went wrong!")
            console.log(error)
        }
    }
    // loginUser()
    //otp form validation
    // hooks for otp
    const [otp, setotp] = useState('')
    return (
        <>
            <div className={`row form-body m-0 p-0 ${regclick}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mx-auto">
                            <div className="card form-container">
                                <div className="card-body">
                                    <h4 className='text-center'><b>User Registration</b></h4>
                                    <div className="form-group">
                                        <label htmlFor="">Fullname</label>
                                        <input type="text" className={`form-control ${fullnameflag}`} name="fullname" value={inputvalue.fullname} onChange={handleInput} onBlur={isFullname} />
                                        <span className='text-danger'>{fullnameError}</span>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Email id</label>
                                        <input type="email" name="email_id" className={`form-control ${emailflag}`} value={inputvalue.email_id} onChange={handleInput} onBlur={isEmail} />
                                        <span className='text-danger'>{email_id_Error}</span>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Contact</label>
                                        <input type="number" name='contact' className={`form-control ${contactflag}`} value={inputvalue.contact} onChange={handleInput} onBlur={isContact} />
                                        <span className='text-danger'>{contactError}</span>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Password</label>
                                        <input type="password" name='password' className={`form-control ${passwordflag}`} value={inputvalue.password} onChange={handleInput} onBlur={isPassword} />
                                        <span className='text-danger'>{passwordError}</span>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Confirm Password</label>
                                        <input type="password" name='cpassword' className={`form-control ${cpasswordflag}`} value={inputvalue.cpassword} onChange={handleInput} onBlur={isCpassword} />
                                        <span className='text-danger'>{cpasswordError}</span>
                                    </div>
                                    <div className="form-group mt-1">
                                        <input type="submit" value="Create Account" className='btn bg-blue w-100' onClick={hanleSubmitForm} />
                                    </div>
                                    <div className="form-group mt-1">
                                        <p>Already have account<span className='text-white'>&#63;</span> <Link to='' className='bg-green' onClick={regForm}>Click here to signIn!</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`row form-body m-0 p-0 ${logclick}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mx-auto">
                            <div className="card form-container">
                                <div className="card-body">
                                    <h4 className='text-center'><b>User Login</b></h4>
                                    <div className="form-group">
                                        <label htmlFor="">Email id</label>
                                        <input type="email" name='logemail' className={`form-control`} value={loginDetail.logemail} onChange={handleLogInput} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Password</label>
                                        <input type="password" className={`form-control`} name="logpassword" value={loginDetail.logpassword} onChange={handleLogInput} />
                                    </div>
                                    <div className="form-group mt-1">
                                        <input type="submit" onClick={loginUser} value="Login" className='btn bg-blue w-100' />
                                    </div>
                                    <div className="form-group mt-1">
                                        <input type="checkbox" /> Stay SignIn!
                                    </div>
                                    <div className="form-group mt-1">
                                        <input type="checkbox" /> Agree to terms and services!
                                    </div>
                                    <div className="form-group mt-1">
                                        <p>Haven't have account<span className='text-white'>&#63;</span> <Link to='' className='bg-green' onClick={logForm}>Click here to register!</Link></p>
                                    </div>
                                    <div className="form-group mt-1">
                                        <p>Forgot your password<span className='text-white'>&#63;</span> <Link to='' className='bg-green'>Click here to recover!</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`row form-body m-0 p-0 ${otpclick}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mx-auto">
                            <div className="card form-container">
                                <div className="card-body m-vertical">
                                    <h4 className='text-center'><b>Account verification</b></h4>
                                    <div className="form-group">
                                        <label htmlFor="">Enter otp</label>
                                        <input type="number" value={otp} className={`form-control`} onChange={(e) => setotp(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" className='btn bg-blue w-100 mt-2' />
                                    </div>
                                    <div className="form-group mt-1">
                                        <p>click here to resend otp<Link to='' className='bg-green'>Click here</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}
