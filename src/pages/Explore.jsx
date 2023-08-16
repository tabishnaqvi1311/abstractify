import React from 'react'
import Stories from '../components/Stories'

const Explore = () => {


 
  return (
    <div className='bg-[#f2f5f9]'>
      <div className='px-20 py-10'>
        <h1 className='font-bold text-5xl my-5'>Explore abstractify</h1>
        <div>
          <Stories/>
        </div>
      </div>
    </div>
  )
}

export default Explore