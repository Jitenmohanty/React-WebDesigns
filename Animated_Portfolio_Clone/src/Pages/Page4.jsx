import React from 'react'

const Page4 = () => {
  return (
    <div className='h-screen bg-white p-2'>
        <div className='h-full w-full text-white p-16 overflow-hidden bg-black rounded-[3vw] shadow-lg flex justify-between shadow-gray-700'>
            <div>
                <h1 className='text-[19vw] font-[wolf4] leading-[15vw] text-gray-400 uppercase'>What</h1>
                <h1 className='text-[19vw] font-[wolf4] leading-[15vw]  uppercase'>I do</h1>
                <h3 className='text-[1.3vw] font-[wolf2] uppercase'>I Design and Develop</h3>
                <h3 className='text-[1.4vw] text-gray-400 font-[wolf3]'>MODERN, IMPACTFUL AND LUXURIOUS</h3>
                <h3 className='text-[1.4vw] font-[wolf2]'>websites that seamlessly bridge your goals with needs of your clients.
                </h3>
            </div>
            <div className='h-[100%]'>
                <video autoPlay loop muted className='h-[225%] w-[80%]' src="https://video.wixstatic.com/video/11062b_1a4b9f19c7d04747b5bf18c406ce3f55/480p/mp4/file.mp4"></video>
            </div>
        </div>
    </div>
  )
}

export default Page4
