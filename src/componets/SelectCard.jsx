import React from 'react'

const SelectCard = ({bg, text}) => {
  return (
    <div className='relative'>
            <img className='w-full h-full object-cover' src={bg} alt="/" />
            <div className='hover:bg-[#00000080] ease-in-out duration-50 absolute top-0 left-0 w-full h-full'>
                <p className=' font-bold left-4 bottom-4 text-2xl absolute text-[#fff]'>{text}</p>
            </div>
        </div>
  )
}

export default SelectCard;