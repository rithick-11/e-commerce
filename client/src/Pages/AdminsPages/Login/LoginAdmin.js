import React from 'react'
import "./LoginAdmin.css"

const LoginAdmin = () => {
  return (
    <section className='bg-login-form'>
        <main className='w-22 bg-zinc-400/50 text-white py-10 px-7 rounded-lg border-[1px] border-white/50'>
           <h1 className='text-center mb-7 text-xl font-medium'>Login As Admin</h1>
            <form className='flex flex-col gap-3' >
                <input  type='text' required className='bg-black/40 px-4 py-2 rounded' placeholder='Username' />
                <input  type='password' required className='bg-black/40 px-4 py-2 rounded' placeholder='Password'/>
                <button type='submit' className='bg-white text-black self-center px-2 py-2 font-bold rounded w-1/2'>login</button>
            </form>
        </main>
    </section>
  )
}

export default LoginAdmin