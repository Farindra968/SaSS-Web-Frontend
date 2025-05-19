import React from 'react'
import { BiSupport } from 'react-icons/bi'
import { FaTruckMoving } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

const TopHeader = () => {
    const data1 = [
        {
            label: 'Fast & Free Delivery',
            icon: <FaTruckMoving />,
            link: '#',
        },
        {
            label: "Track Order",
            icon: <FaLocationDot />,
        },
                {
            label: 'Support ',
            icon: <BiSupport   />,
            link: '#',
        },
        {
            label: "Location",
            icon: <FaLocationDot />,
        }
    ]
  return (
    <section className='border-b-2 border-primary-50 hidden lg:block'>
        <div className='max-w-screen-xl  mx-auto flex justify-between  items-center py-3 px-4 xl:px-0'>
        <div className="flex items-center gap-2 space-x-2">
            {data1.slice(0,2).map((item, index)=>(
                <div key={index} className='flex items-center gap-2 text-sm text-primary-500 font-Poppins-Medium'>
            <span className='text-base'>
                {item.icon}
            </span>
            <p>{item.label}</p>
                </div>
            ))}

        </div>
        <div className="flex items-center gap-2 space-x-2">
            {data1.slice(2,4).map((item, index)=>(
                <div key={index} className='flex items-center gap-2 text-sm text-primary-500 font-Poppins-Medium'>
            <span className='text-base'>
                {item.icon}
            </span>
            <p>{item.label}</p>
                </div>
            ))}

        </div>
        </div>

    </section>
  )
}

export default TopHeader