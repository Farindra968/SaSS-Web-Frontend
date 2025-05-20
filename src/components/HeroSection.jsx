import React from 'react'
import heroImg from "../assets/images/img/hero_img.png"
import GridDot from './uI/gridDot'
import Card from './uI/Card'
import Heading from './uI/Heading'
import Buttom from './uI/Buttom'
import bookData from '../data/bookData'

const HeroSection = () => {

  return (
    <section className='w-full grid grid-cols-1 lg:grid-cols-4 gap-4 py-6 px-4 lg:px-0'>
        <div className='col-span-3  bg-primary-200 rounded-lg p-10 grid grid-cols-1 lg:grid-cols-2 relative overflow-hidden ' >
            {/* dot */}
            <GridDot size={20} left="left-2" bottom="bottom-2" color="#1d5486" index="z-0" />
            <GridDot size={20} right="right-2" top="top-2" color="#fcfcfc" index="z-30" />
            
            <div className='p-2 space-y-5 z-20'>
                <p className='font-Poppins-Medium text-sm text-secondary-800 z'>Welcome to BookMart</p>
                <h1 className='font-Poppins-Bold  font-bold text-4xl text-primary-800 tracking-wide'>Special Flat 50% Off</h1>
                <p className='font-Poppins-Medium text-lg tracking-wide text-primary-700'>On Bestselling Titles</p>
                <p className='font-Poppins text-text-800 text-sm'>
                    Discover thousands of books from every genre — novels, textbooks, children’s books, self-help & more. Dive into stories, explore new worlds, and fuel your knowledge.
                </p>
                <div className='py-2 space-x-4'>
                    <Buttom label="Shop Books" bg="bg-primary-500" text="text-white" hover_bg="bg-primary-600"/>
                    <Buttom label="Browse Categories" bg="bg-primary-100" text="text-primary-500" hover_bg="bg-primary-200"/>
                </div>
            </div>

            <div className='hidden lg:block'>
                <img src={heroImg} width={400} height={400} alt='' className='absolute right-0 bottom-0 z-20'/>
                <div className="w-80 h-80 bg-secondary-600 rounded-full absolute overflow-hidden -top-20 -right-20 "></div>
                <div className="w-80 h-80 bg-button-600 opacity-85 rounded-full absolute overflow-hidden -bottom-40 right-50 "></div>
            </div>
        </div>
        <div className='hidden lg:block bg-button-50 rounded-lg p-4 space-y-2'>
            <Heading title="Best Selling"/>
            <div className="grid grid-cols-2 gap-4"> 
            {bookData?.slice(0, 4).map((book, index)=>(
            <Card key={index} {...book}/>
            ))}
            </div>

        </div>
    </section>
  )
}

export default HeroSection
