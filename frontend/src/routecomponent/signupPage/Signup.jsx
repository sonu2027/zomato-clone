import React from 'react'
import "./Signup.css"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { sendEmailOtp } from '../../databaseCall/sendEmailOtp.js';
import { useRef } from 'react';
import { customerRegistration } from '../../databaseCall/registerCustomer.js';
import { useNavigate } from 'react-router-dom';
import { setCustomerDetail } from '../../store/customerSlice.js';
import { useDispatch } from 'react-redux';

const Signup = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [useremail, setUseremail] = useState('');
    const [userpassword, setUserpassword] = useState('')
    const [verifyOtp, setVerifyOtp] = useState(false)
    const [inputOtp, setInputOtp] = useState(Array.from({ length: 6 }, () => ""));
    const [otp, setOtp] = useState("")
    const [currentFocus, setCurrentFocus] = useState(0)

    const [signupSuccess, setSignupSuccess] = useState(false)
    let inputRef = useRef(null)


    const handleSubmit = async (e) => {
        e.preventDefault()
        if (useremail.includes("@gmail.com") && firstName.length > 1 && lastName.length > 1 && userpassword.length > 7) {
            sendEmailOtp(useremail)
                .then((res) => {
                    console.log("res is: ", res);
                    setVerifyOtp(true)
                    setOtp(res)
                })
                .catch(() => {

                })
        }
    }

    const handleChange = (e, index) => {

        if (inputOtp[index].length < 1) {
            const value = e.target.value;
            console.log("val is: ", value);
            setInputOtp(prevState => {
                const newState = [...prevState];
                newState[index] = value;
                return newState;
            });
            if (index < 5) {
                setCurrentFocus(index + 1)
                inputRef.current.focus()
            }
        }
    }

    const handleFocus = (e, index) => {
        console.log("e", e);
        e.target.focus()
        setCurrentFocus(index)
    }

    const handleKeyDown = (e, index) => {
        console.log("e on key down: ", e);
        if (e.key === 'Backspace') {
            setInputOtp(prevState => {
                const newState = [...prevState];
                newState[index] = "";
                return newState;
            });
        }
        console.log(e);

    }

    const handleVerifyEmail = async (e) => {
        e.preventDefault()

        if (inputOtp.some(digit => digit === '')) {
            return;
        }

        let inputOtpStr = ""
        inputOtp.forEach((e) => {
            inputOtpStr += e
        })

        if (inputOtpStr === String(otp)) {
            customerRegistration(firstName, lastName, useremail, userpassword)
                .then((res) => {
                    console.log('RES rec is: ', res);
                    dispatch(setCustomerDetail(res))
                    navigate("/")
                })
                .catch(() => {

                })
        }
    }


    console.log("inp otp : ", inputOtp);

    return (
        <div className='Signup-parent'>
            {
                verifyOtp ?
                    <div className='verifyOtp'>
                        <div className='heading'>Verify Your email</div>
                        <div className='para'>
                            <div className='div1'>Enter the 8 digit code you have received on</div>
                            <div className='div2'>{useremail.slice(0, 3)}***{useremail.slice(useremail.length - 10, useremail.length)}</div>
                        </div>

                        <form className='form' onSubmit={handleVerifyEmail}>
                            <label htmlFor="">Code</label>
                            <div className="form-child">
                                {Array.from({ length: 6 }).map((_, i) => (
                                    <input
                                        onFocus={(e) => handleFocus(e, i)}
                                        key={i}
                                        ref={i === currentFocus + 1 ? inputRef : null}
                                        onChange={(e) => handleChange(e, i)}
                                        onKeyDown={(e) => handleKeyDown(e, i)}
                                        className='input'
                                        type="number"
                                        maxLength={1}
                                        value={inputOtp[i]}
                                    />

                                ))}
                            </div>
                            <button className='verify-button ' type="submit">Verify</button>
                        </form>

                    </div>
                    :
                    <div className='Signup'>
                        <div className='heading'>Create your account</div>

                        <form className='form' >
                            <div className='div'>
                                <label htmlFor="username">First name</label>
                                <input onChange={(e) => setFirstname(e.target.value)} required className='input' type="text" name="username" id="username" placeholder='Enter' />
                            </div>

                            <div className='div'>
                                <label htmlFor="username">Last name</label>
                                <input onChange={(e) => setLastname(e.target.value)} required className='input' type="text" name="username" id="username" placeholder='Enter' />
                            </div>

                            <div className='div'>
                                <label htmlFor="useremail">Email</label>
                                <input onChange={(e) => {
                                    setUseremail(e.target.value)
                                }} required className='input' type="email" name="useremail" id="useremail" placeholder='Enter' />
                            </div>

                            <div className='div'>
                                <label htmlFor="userpassword">Password</label>
                                <input minLength={8} onChange={(e) => setUserpassword(e.target.value)} required className='input' type="password" name="userpassword" id="userpassword" placeholder='Enter' />
                            </div>

                            <button onClick={handleSubmit} className='create-account-button' type="submit">Create Account</button>
                        </form>

                        <div className='about-login'>
                            <span>Have an Account?</span>
                            <Link to="/">
                                <button className='login-button'>LOGIN</button>
                            </Link>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Signup