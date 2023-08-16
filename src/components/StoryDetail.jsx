import React, { useEffect, useState } from 'react'
import { useParams } from "react-router"
import moment from 'moment/moment';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { findStory, updateContent } from '../graphql/queries';

const StoryDetail = () => {

    const [storyData, setStoryData] = useState({ title: "", content: "", tags: "", likes: "", cooldown: "", creator: { username: "" }, stage: "", createdAt: "" });

    const [oldContent, setOldContent] = useState("");
    const [newContent, setNewContent] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [liked, setLiked] = useState(false);

    const url = useParams().id.split("-")
    const story_id = url[url.length - 1]


    useEffect(() => {
        const fetchStory = async () => {
            const response = await fetch(`http://localhost:4000/graphql`, {
                method: "POST",
                headers: {
                    "x-api-key": ""
                },
                body: JSON.stringify({
                    query: findStory,
                    variables: {
                        id: story_id
                    }
                })
            })

            const json = await response.json();
            const { title, content, tags, likes, cooldown, creator, createdAt } = json.data.story;
            setOldContent(content)
            setStoryData({
                title,
                content,
                tags,
                likes,
                cooldown,
                creator,
                createdAt
            })
        }

        fetchStory()
    }, [])

    const handleContribution = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:4000/graphql`, {
                method: "POST",
                headers: {
                    "x-api-key": ""
                },
                body: JSON.stringify({
                    query: updateContent,
                    variables: {
                        id: story_id,
                        content: oldContent + " " + newContent
                    }
                })
            })
            const json = await response.json();
            if (json.errors) {
                console.log(json.errors[0].message)
                return
            }
            const { content } = json.data.storyUpdate.story;
            setOldContent(content);
            console.log(json)
        } catch (error) {
            console.log(error.message);
        }
        setIsModalOpen(false)
    }



    return (
        <div className=' bg-[#f2f5f9] h-[90vh]'>
            <div className='flex flex-col justify-center items-center py-20'>
                <h1 className='font-bold text-5xl capitalize'>{storyData.title}</h1>
                <div className='text-lg my-4 flex items-center'>
                    <span className='font-bold'>{storyData.creator.username}</span>
                    <span className='mx-3'>•</span>
                    <span className='text-gray-500'>{moment(storyData.createdAt).format('DD MM YYYY')}</span>
                    <span className='mx-3'>•</span>
                    <span className='bg-blue-400 lowercase rounded-xl p-1 text-white'>  {storyData.tags}</span>
                    <span className='mx-3'>•</span>
                    <button>{liked ? <FavoriteIcon htmlColor='#a755f7' /> : <FavoriteBorderIcon />}{storyData.likes}</button>
                </div>
                <div className='my-20 text-justify w-[75%] text-xl'>
                    {storyData.content}
                </div>
                <button className='bg-purple-500 text-white p-3 rounded-xl shadow-lg' onClick={openModal => setIsModalOpen(true)}>Contribute {`>`}</button>
            </div>

            {isModalOpen && (
                <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-xl shadow-lg'>
                    <form className='text-white font-bold' onSubmit={handleContribution}>
                        <textarea placeholder='write your contribution...' className='focus:outline-none bg-black w-[40rem] p-5' value={newContent} onChange={e => setNewContent(e.target.value)} />
                        <div className='flex justify-center gap-10 mt-5'>
                            <button type='submit' className='bg-purple-500 p-2 rounded-xl'>Go!</button>
                            <button onClick={closeModal => setIsModalOpen(false)} className='bg-blue-500 p-2 rounded-xl'>Close</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}

export default StoryDetail
