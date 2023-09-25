import React, { useState } from 'react'
import { RiEyeCloseFill } from 'react-icons/ri'
import { RiEyeFill } from 'react-icons/ri'
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Registrationa = () => {
    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [password, setPassword] = useState();


    const handleEmail = (e) => {
        setEmail(e.target.value);
        setEmailerr('');
    }
    const handleName = (e) => {
        setName(e.target.value);
        setNameerr('');
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setPassworderr('');
    }

    const auth = getAuth();
    const [emailerr, setEmailerr] = useState();
    const [nameerr, setNameerr] = useState();
    const [passworderr, setPassworderr] = useState();

    const [passwordshow, setPasswordshow] = useState(false);
    const navigate = useNavigate();



    const handleSubmit = () => {
        if (!email) {
            setEmailerr('Please enter your mail address');

        } else {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)) {
                setEmailerr('Please enter a valid mail address');
            }
        }
        if (!name) {
            setNameerr(' Enter your full name');
        }
        if (!password) {
            setPassworderr('Enter your password');
            // }else{
            //     if(!/^(?=.*[a-z])/.test(password)){
            //         setPassworderr('The string must contain at least 1 lowercase alphabetical character');
            //     }else if(!/^(?=.*[A-Z])/.test(password)){
            //         setPassworderr('The string must contain at least 1 upppercase alphabetical character');
            //     }else if(!/^(?=.*[0-9])/.test(password)){
            //         setPassworderr('The string must contain at least 1 numeric character');
            //     }else if(!/^(?=.*[!@#$%^&*])/.test(password)){
            //         setPassworderr('The string must contain at least one special character');
            //     }else if(!/^(?=.{8,})/.test(password)){
            //         setPassworderr('The string must be eight characters or longer');
            //     }
        } if (email && name && password && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)) {

            createUserWithEmailAndPassword(auth, email, password).then(() => {
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        toast.success('Registration done. Please verify your email');
                      setEmail('');
                      setName('');
                      setPassword('');
                      setTimeout(() => {
                          navigate('/login')
                      }, 3000);
                      
                    });


            })
                .catch((error) => {
                    if (error.code.includes('auth/email-already-in-use')) {
                        setEmailerr('This email is already taken');
                    }

                })
        }
    }
    return (
        <div className='flex w-full'>

            <div className='w-full md:w-1/2'>
                <div className='flex justify-center ml-[20px] md:ml-[0px] mt-[60px] md:justify-end  md:mt-56 md:mr-[69px]'>
                    <div>
                        <h1 className='text-heading font-nunta font-bold text-[24px] md:text-4xl'>Get started with easily register</h1>
                        <h2 className='text-[#BEBEBE] font-nunta text-xl mt-3'>Free register and you can enjoy it</h2>
                        <ToastContainer position="top-center" theme="dark"/>

                        <div className='mt-[39px] relative'>
                            <input onChange={handleEmail} value={email} type="email" placeholder='Email' className='focus:outline-none w-[20rem] md:w-96 py-6 px-14 rounded-lg border-solid border-[#BEBEBE] border-2 text-xl font-semibold text-[#B8BACF]' />
                            <p className='font-nunta font-semibold text-sm text-heading absolute top-[-10px] left-[50px] px-[6px] bg-white'>Email Address</p>
                            <div className='absolute w-full top-[80%] left-[2px]'>
                                {emailerr &&
                                    <div className='w-[70%] relative rounded-[5px] px-[10px] py-[5px] bg-red-500 z-[1]'>
                                        <div className='absolute w-[15px] h-[15px] rotate-45 bg-red-500 top-[-4px] left-[7px] z-[-1] '></div>
                                        <p className='font-nunta text-base text-white'>{emailerr}</p>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className='mt-[39px] relative'>
                            <input onChange={handleName} value={name} type="text" placeholder='Full name' className='focus:outline-none w-[20rem] md:w-96 py-6 px-14 rounded-lg border-solid border-[#BEBEBE] text-xl font-semibold text-[#11175D] border-2' />
                            <p className='font-nunta font-semibold text-sm text-heading absolute top-[-10px] left-[50px] px-[6px] bg-white'>Full name</p>
                            <div className='absolute w-full top-[80%] left-[2px]'>
                                {nameerr &&
                                    <div className='w-[70%] relative rounded-[5px] px-[10px] py-[5px] bg-red-500 z-[1]'>
                                        <div className='absolute w-[15px] h-[15px] rotate-45 bg-red-500 top-[-4px] left-[7px] z-[-1]'></div>
                                        <p className='font-nunta text-base text-white'>{nameerr}</p>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className='mt-[39px] relative'>
                            <input onChange={handlePassword} value={password} type={passwordshow ? 'text' : 'password'} placeholder='Password' className='focus:outline-none w-[20rem] md:w-96 py-6 px-14 rounded-lg border-solid border-[#BEBEBE] text-xl font-semibold text-[#11175D] border-2' />
                            <p className='font-nunta font-semibold text-sm text-heading absolute top-[-10px] left-[50px] px-[6px] bg-white'>Password</p>

                            <div className='absolute w-full top-[80%] left-[2px]'>
                                {
                                    passwordshow ? <RiEyeFill onClick={() => setPasswordshow(!passwordshow)} className='absolute w-full top-[-28px] left-[100px]'></RiEyeFill> :
                                        <RiEyeCloseFill onClick={() => setPasswordshow(!passwordshow)} className='absolute w-full top-[-28px] left-[100px]'></RiEyeCloseFill>
                                }
                                {passworderr &&
                                    <div className='w-[70%] relative rounded-[5px] px-[10px] py-[5px] bg-red-500 z-[1]'>
                                        <div className='absolute w-[15px] h-[15px] rotate-45 bg-red-500 top-[-4px] left-[7px] z-[-1] '></div>
                                        <p className='font-nunta text-base text-white'>{passworderr}</p>
                                    </div>
                                }
                            </div>
                        </div>
                        <button onClick={handleSubmit} className='font-nunta font-semibold text-xl text-white bg-primary px-36 py-2 md:py-5 md:px-40 rounded-[84px] text-center  mt-6 md:mt-[51px]'>
                            Sign up
                        </button>
                        <div>
                            <p className='font-sans text-[#03014C] text-sm text-center mt-[15px] md:mr-[132px]  md:mt-[35px]'>Already  have an account ? <Link to='/login' className='text-[#EA6C00] font-semibold'>Sign In</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:w-1/2  hidden md:block'>
                <img src="regi.png" className='object-cover h-screen w-full' alt="" />
            </div>

        </div>
    )
}

export default Registrationa