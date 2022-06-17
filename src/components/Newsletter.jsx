import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold'>Want tips & tricks to optimize your flow?</h1>
                <p>Signup to our newsletter and stay up to date.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md text-black' type="email" name='email' id='email'placeholder='Email' />
                    <button className=' text-black bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 px-6 ml-6'>Notify Me</button>
                </div>
                <p>We care about the protection of your data. Read our <span className='text-[#00df9a]'><a href="">Privacy Policy.</a></span></p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter