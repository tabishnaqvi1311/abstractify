import React from 'react'

const Home = () => {
    return (
        <div className='bg-[#f2f5fb] h-[90vh]'>
            <div className='flex flex-col justify-center pt-40 items-center'>
                <h1 className='lg:text-7xl font-bold text-5xl text-center'>Your Imagination. <br /> One <u className='text-blue-500'>Line</u> At A Time.</h1>
                <span className='my-5 text-xl text-center'>Experience A New Level Of Collaborative Storytelling</span>
                <h4 className='my-5'>What should we call you?</h4>
                <form autoComplete='off' autoSave='off' className='flex gap-3'>
                    <input type='text' className='p-4 focus:outline-none bg-black text-white rounded-xl shadow-md font-semibold text-lg' placeholder='username...' />
                    <button type='submit' className='bg-purple-500 px-4 rounded-xl shadow-md cursor-pointer'>&rarr;</button>
                </form>
            </div>

        </div>
    )
}

export default Home
