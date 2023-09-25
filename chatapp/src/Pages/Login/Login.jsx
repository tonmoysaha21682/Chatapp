import React, { useState } from 'react'
import { RiEyeCloseFill } from 'react-icons/ri'
import { RiEyeFill } from 'react-icons/ri'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setEmailerr('');
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        setPassworderr('');
    }


    const [emailerr, setEmailerr] = useState();
    const [passworderr, setPassworderr] = useState();

    const [passwordshow, setPasswordshow] = useState(false);
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const handleGgl = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
               setTimeout(() => {
                navigate('/');
               }, 3000);
            }).catch((error) => {
              
                const errorCode = error.code;
              
            });

    }



    const handleSubmit = () => {
        if (!email) {
            setEmailerr('Please enter your mail address');

        } else {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)) {
                setEmailerr('Please enter a valid mail address');
            }
        }

        if (!password) {
            setPassworderr('Enter your password');
        }
        // else {
        //     if (!/^(?=.*[a-z])/.test(password)) {
        //         setPassworderr('The string must contain at least 1 lowercase alphabetical character');
        //     } else if (!/^(?=.*[A-Z])/.test(password)) {
        //         setPassworderr('The string must contain at least 1 upppercase alphabetical character');
        //     } else if (!/^(?=.*[0-9])/.test(password)) {
        //         setPassworderr('The string must contain at least 1 numeric character');
        //     } else if (!/^(?=.*[!@#$%^&*])/.test(password)) {
        //         setPassworderr('The string must contain at least one special character');
        //     } else if (!/^(?=.{8,})/.test(password)) {
        //         setPassworderr('The string must be eight characters or longer');
        //     }
        // }

        if (email && password && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)) {

            signInWithEmailAndPassword(auth, email, password)
                .then(() => {
                    toast.success('Login successfull');
                    setTimeout(() => {
                        navigate('/')
                    }, 3000);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    console.log(errorCode);
                });
        }



    }
    return (
        <div className='flex w-full'>

            <div className='w-full md:w-1/2'>
                <div className='flex justify-center ml-[20px] md:ml-[0px] mt-[60px] md:justify-end  md:mt-56 md:mr-[69px]'>
                    <ToastContainer position="top-center" theme="dark" />

                    <div>
                        <h1 className='text-heading font-nunta font-bold text-[24px] md:text-4xl'>Login to your account!</h1>
                        <div onClick={handleGgl} className='cursor-pointer flex w-[220px] px-8 py-5 border-2 border-solid-[#BEBEBE] rounded-[8px] mt-8'>

                            <FcGoogle className='w-5 h-5'></FcGoogle>
                            <p className='text-center font-sans text-heading text-[13px] ml-[9px]'>Login with Google</p>
                        </div>


                        <div className='mt-[32px] relative'>
                            <input onChange={handleEmail} type="email" placeholder='Youraddres@email.com' className='focus:outline-none w-[20rem] md:w-96 py-6  border-b border-[#BEBEBE] border-b-2 text-xl font-semibold text-[#B8BACF]' />
                            <p className='font-sans font-semibold text-sm text-heading absolute top-[-10px]  bg-white'>Email Address</p>
                            <div className='absolute w-full top-[80%] left-[2px]'>
                                {emailerr &&
                                    <div className='w-[70%] relative rounded-[5px] px-[10px] py-[5px] bg-red-500 z-[1]'>
                                        <div className='absolute w-[15px] h-[15px] rotate-45 bg-red-500 top-[-4px] left-[7px] z-[-1] '></div>
                                        <p className='font-sans text-base text-white'>{emailerr}</p>
                                    </div>
                                }
                            </div>
                        </div>

                        <div className='mt-[60px] relative'>
                            <input onChange={handlePassword} type={passwordshow ? 'text' : 'password'} placeholder='Enter your password' className='focus:outline-none w-[20rem] md:w-96 py-6 font-sans border-[#BEBEBE] text-xl font-semibold text-[#11175D] border-b-2' />
                            <p className='font-sans font-semibold text-sm text-heading absolute top-[-10px]  bg-white'>Password</p>

                            <div className='absolute w-full top-[80%] left-[2px]'>
                                {
                                    passwordshow ? <RiEyeFill onClick={() => setPasswordshow(!passwordshow)} className='absolute w-full top-[-28px] left-[100px]'></RiEyeFill> :
                                        <RiEyeCloseFill onClick={() => setPasswordshow(!passwordshow)} className='absolute w-full top-[-28px] left-[100px]'></RiEyeCloseFill>
                                }
                                {passworderr &&
                                    <div className='w-[70%] relative rounded-[5px] px-[10px] py-[5px] bg-red-500 z-[1]'>
                                        <div className='absolute w-[15px] h-[15px] rotate-45 bg-red-500 top-[-4px] left-[7px] z-[-1] '></div>
                                        <p className='font-sans text-base text-white'>{passworderr}</p>
                                    </div>
                                }
                            </div>
                        </div>
                        <button onClick={handleSubmit} className='font-sans font-semibold text-xl text-white bg-primary px-36 py-2 md:py-[26px] md:px-[122px] rounded-[8px] text-center  mt-6 md:mt-[55px]'>
                            Login to Continue
                        </button>
                        <div>
                            <p className='font-sans text-[#03014C] text-sm text-center mt-[15px] md:mr-[132px]  md:mt-[35px]'>Don’t have an account ?  <Link to='/registar' className='text-[#EA6C00] font-semibold'>Sign up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:w-1/2  hidden md:block'>
                <img src="login.png" className='object-cover h-screen w-full' alt="" />
            </div>

        </div>
    )
}

export default Login