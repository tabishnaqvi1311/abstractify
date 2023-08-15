import React, { useState } from 'react'
import { contVal, cooldown, tagChoice } from '../constants';


const Seed = () => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [tags, setTags] = useState();
    const [contributerCooldown, setContributerCooldown] = useState();
    const [contributionVal, setContributionVal] = useState();

    


    return (
        <div className='lg:p-20 p-10 bg-[#f2f5fa]'>
            <div className='lg:my-5'>
                <span className='font-bold'>Hi, username,</span>
                <h2 className='lg:text-5xl text-3xl font-bold my-3'>You Create A Story.</h2>
                <span className='font-bold lg:text-3xl text-xl text-blue-500'>And Watch As It Grows! 👀</span>
            </div>
            <div className=''>
                <form className='flex flex-col gap-5 m-10'>
                    <label htmlFor='title' className='text-xl font-bold'>Title*</label>
                    <input type='text' placeholder='an interesting title...' name='title' className='bg-black p-4 text-white font-bold rounded-xl focus:outline-none' value={title} onChange={e => setTitle(e.target.value)} />
                    <label htmlFor='content' className='text-xl font-bold'>Content</label>
                    <textarea placeholder='write the beginning to something big...' className='bg-black p-4 text-white font-bold rounded-xl focus:outline-none' value={content} onChange={e => setContent(e.target.value)} />
                    <div className='flex lg:flex-row flex-col lg:gap-20 gap-7'>
                        <div className='flex flex-col'>
                            <label htmlFor='tags' className='text-xl font-bold'>Tags/Genre*</label>
                            <select name='tags' value={tags} onChange={e => setTags(e.target.value)} className='bg-black text-white rounded-xl p-3 font-bold'>
                                {tagChoice.map((option) => (
                                    <option key={option.id}>{option.title}</option>
                                ))}
                            </select>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor='cooldown' className='text-xl font-bold'>Contributer Cooldown*</label>
                            <select name='cooldown' value={contributerCooldown} onChange={e => setContributerCooldown(e.target.value)} className='bg-black text-white rounded-xl p-3 font-bold'>
                                {cooldown.map((option) => (
                                    <option key={option.id}>{option.title}</option>
                                ))}
                            </select>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor='val' className='text-xl font-bold'>Contribution Value*</label>
                            <select name='val' value={contributionVal} onChange={e => setContributionVal(e.target.value)} className='bg-black text-white rounded-xl p-3 font-bold'>
                                {contVal.map((option) => (
                                    <option key={option.id}>{option.title}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <button type='submit' disabled={title.length < 1 ? true : false} className='bg-purple-500 p-3 rounded-xl text-white font-bold text-lg my-5 hover:bg-purple-600 disabled:bg-purple-800'>Plant My Story! &rarr;</button>
                </form>
            </div>
        </div>
    )
}

export default Seed
