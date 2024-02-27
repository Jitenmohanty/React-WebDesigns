import React from 'react'
import  {motion} from 'framer-motion'

const Merquer = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".002"  className='morquee w-full lg:py-20 py-10 bg-[#004D43] pt-1 rounded-tl-3xl rounded-tr-3xl'>
        <div data-scroll-speed="-.9" className="inner border-t-2 border-b-2 lg:mt-20 pt-6 mt-10 flex overflow-hidden whitespace-nowrap">
                <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:'linear',repeat:Infinity,duration:5}} className='text-[38vw] lg:text-[22vw] font-bold -mt-12 -mb-2  leading-tight lg:leading-none tracking-[-1.8vw] uppercase'>We Are Ochi</motion.h1>
                <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:'linear',repeat:Infinity,duration:5}} className='text-[38vw] lg:text-[22vw] font-bold -mt-12 -mb-2 leading-tight lg:leading-none tracking-[-1.8vw] uppercase'>We Are Ochi</motion.h1>
                <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:'linear',repeat:Infinity,duration:5}} className='text-[34] lg:text-[22vw] font-bold -mt-12 -mb-2 leading-tight lg:leading-none tracking-[-1.8vw] uppercase'>We Are Ochi</motion.h1>
                   
        </div>
    </div>
  )
}

export default Merquer
