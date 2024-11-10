import React from 'react'

const Page3 = () => {
  return (
    <div className='min-h-screen bg-white flex justify-center items-center relative '>
        <video className='object-cover relative z-10 h-[70vh] w-[50vw]' autoPlay muted loop src="https://video.wixstatic.com/video/f1c650_ec0546cb7b10485c8753983f298c6ea4/360p/mp4/file.mp4"></video>
        <img className='absolute z-20' src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_937,h_539,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/try.png" alt="image" />
        <div className='h-0.5 bg-gray-500 w-[60%] z-0 absolute'></div>
        <div className='h-0.5 bg-gray-500 w-[80%] z-0 mt-48 absolute'></div>
        <div className='h-0.5 bg-gray-500 w-[100%] z-0 mt-96  absolute'></div>
    </div>
  )
}

export default Page3
