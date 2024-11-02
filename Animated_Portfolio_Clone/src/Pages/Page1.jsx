import React from 'react'
import TilledText from '../Components/TilledText'
const Page1 = () => {
  return (
    <div className='h-screen p-4 bg-white'>
        <div className='bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1862,h_829,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_auto/ANZO.jpg)] h-full w-full shadow-2xl rounded-[2rem] shadow-gray-500 bg-cover bg-no-repeat'>
        <img className='pl-16 py-10 h-36 w-36 object-contain' src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_99,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png" alt="Logo" />
        <TilledText/>
        </div>
    </div>
  )
}

export default Page1
