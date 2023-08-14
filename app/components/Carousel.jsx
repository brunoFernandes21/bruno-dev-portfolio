import Image from 'next/image'
import React, {useState} from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'

const slides = [
    {url: "/images/northcoders-news.png"},
    {url: "/images/northcoders-news.png"}
]
const Carousel = ({ title, image}) => {
  return (
    <div className=' w-full m-auto py-16 px-4 relative'>
       <div style={{ backgroundImage: `url(${slides[0].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'></div>
    </div>
  )
}

export default Carousel