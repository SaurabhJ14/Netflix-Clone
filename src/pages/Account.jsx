import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
      <div className='w-full text-white'>
        <img className='w-full h-[400px] object-cover'
          src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt='/'
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
          <div className='absolute top-[20%] p-4 md:p-8'>
            <h1 className='text-3xl md:text-5xl font-bold' >My Shows</h1>
          </div>
        </div>
        <SavedShows />
    </>
  )
}

export default Account