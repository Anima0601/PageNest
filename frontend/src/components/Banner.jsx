import React from 'react'
import bannerr from './../assets/banner01.png'
function Banner() {
  return (
    <div className='max w-screen-2xl container mx-auto mt-4 md:px-20 px-4 flex flex-col md:flex-row'>
      <div className='w-full order-2 md:order-1 md:w-1/2'>
        <div className='my-12'>
          <h1 className='text-4xl font-bold font-sans'>Welcome, here to learn something <br></br><span className='text-blue-500'>new everyday!</span></h1>

          <div className='my-6'>
            <p className='font-semibold '>Dive into a world of stories, knowledge, and imagination. At PageNest, you can explore and read a wide range of books online — anytime, anywhere. Whether you're into timeless classics, modern fiction, or educational reads, PageNest is your cozy corner for uninterrupted reading. No downloads, no distractions — just you and the pages that spark your curiosity.

            </p>
            <p className='my-6'>Start reading today. Your next favorite book is just a click away.</p>
          </div>
          <div className="join">
            <div>
              <label className="input validator join-item">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input type="email" placeholder="mail@site.com" required />
              </label>
              <div className="validator-hint hidden">Enter valid email address</div>
            </div>
            <button className="btn btn-neutral join-item">Join</button>
          </div>
        </div>
      </div>
      <div className='w-full order-1 md:w-1/2'>
        <img src={bannerr} />
      </div>
    </div>
  )
}

export default Banner
