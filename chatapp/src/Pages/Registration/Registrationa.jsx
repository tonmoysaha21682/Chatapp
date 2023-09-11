import React, { useState } from 'react'

const Registrationa = () => {
    const [email , setEmail] = useState();
    const [ name, setName] = useState();
    const [password , setPassword] = useState();

    const handleEmail =(e)=>{
        setEmail(e.target.value);
        setEmailerr('');
    }
    const handleName =(e)=>{
        setName(e.target.value);
        setNameerr('');
    }
    const handlePassword =(e)=>{
        setPassword(e.target.value);
        setPassworderr('');
    }


    const [emailerr , setEmailerr] = useState();
    const [ nameerr, setNameerr] = useState();
    const [passworderr , setPassworderr] = useState();



    const handleSubmit = ()=>{
        if(!email){
            setEmailerr('ok cool');
        }
        if(!name){
            setNameerr('ok cool');
        }
        if(!password){
            setPassworderr('ok cool');
        }
    }
  return (
    <div className='flex w-full'>

<div className='w-1/2'>
    <div className='flex justify-end mt-56 mr-[69px]'>
        <div>
            <h1 className='text-heading font-nunta font-bold text-4xl'>Get started with easily register</h1>
            <h2 className='text-[#BEBEBE] font-nunta text-xl mt-3'>Free register and you can enjoy it</h2>

            <div className='mt-[39px] relative'>
                <input onChange={handleEmail} type="email" placeholder='Email' className='w-96 py-6 px-14 rounded-lg border-solid border-[#BEBEBE] border-2 text-xl font-semibold text-[#B8BACF]' />
                <p className='font-nunta font-semibold text-sm text-heading absolute top-[-10px] left-[50px] px-[6px] bg-white'>Email Address</p>
                {emailerr &&
                <p>{emailerr}</p>
                }
            </div>
            <div className='mt-[39px] relative'>
                <input onChange={handleName} type="text" placeholder='Full name' className='w-96 py-6 px-14 rounded-lg border-solid border-[#BEBEBE] text-xl font-semibold text-[#11175D] border-2' />
                <p className='font-nunta font-semibold text-sm text-heading absolute top-[-10px] left-[50px] px-[6px] bg-white'>Full name</p>
                {
                    nameerr &&
                    <p>{nameerr}</p>
                }
            </div>
            <div className='mt-[39px] relative'>
                <input onChange={handlePassword} type="password" placeholder='Password' className='w-96 py-6 px-14 rounded-lg border-solid border-[#BEBEBE] text-xl font-semibold text-[#11175D] border-2' />
                <p className='font-nunta font-semibold text-sm text-heading absolute top-[-10px] left-[50px] px-[6px] bg-white'>Password</p>
                {
                    passworderr &&
                    <p>{passworderr}</p>
                }
            </div>
            <button onClick={handleSubmit} className='font-nunta font-semibold text-xl text-white bg-primary py-5 px-40 rounded-[84px] text-center mt-[51px]'>
            Sign up
            </button>
            <div>
                <p className='font-sans text-[#03014C] text-sm text-center mr-[132px] mt-[35px]'>Already  have an account ? <span className='text-[#EA6C00] font-semibold'>Sign In</span></p>
            </div>
        </div>
    </div>
</div>
<div className='w-1/2'>
    <img src="regi.png" className='object-cover h-screen w-full' alt="" />
</div>

    </div>
  )
}

export default Registrationa