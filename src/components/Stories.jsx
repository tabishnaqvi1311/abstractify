import React, { useEffect, useState } from 'react'
import { getExploreStories } from '../graphql/queries'
import { FavoriteBorder } from '@mui/icons-material';
import { FavoriteBorderOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Stories = () => {

    // const [storyData, setStoryData] = useState({id: "", title: "", slug: "", tags: "", content: "", likes: 0});
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchStories = async () => {
            try {
                const response = await fetch(`https://abstractify-main-tabishnaqvi1311.grafbase.app/graphql`, {
                    method: "POST",
                    headers: {
                        "x-api-key": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTIyMTMwNjIsImlzcyI6ImdyYWZiYXNlIiwiYXVkIjoiMDFIN1pXNEEyRVc5QkJGTjREUTBWNjJGUjMiLCJqdGkiOiIwMUg3Wlc0QVY3WlRSSjg2MkVDTktYTURSTiIsImVudiI6InByb2R1Y3Rpb24iLCJwdXJwb3NlIjoicHJvamVjdC1hcGkta2V5In0.iBt-9V-U9luoCso67eZJqOIjNv7PeMcN-VfRS5IfmIE"
                    },
                    body: JSON.stringify({
                        query: getExploreStories
                    })
                })
                const json = await response.json();
                if (json.errors) {
                    console.log(json.errors.message);
                }

                const dataArray = json.data.storyCollection.edges
                setData(dataArray);


            } catch (error) {
                console.log(error);
            }
        }
        fetchStories();
    }, [])

    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength) + "..."
    }

    return (
        <div className='bg-white'>
            {data.map((item) => (
                <Link to={`/story/${item.node.slug + "-" + item.node.id}`} key={item.node.id}>
                    <div className='border-4 border-black rounded-xl my-10 p-10'>
                        <span>{item.node.creator.username}</span>
                        <div className='flex items-center gap-5'>
                            <h1 className='font-bold text-2xl capitalize'>{item.node.title}</h1>
                            <span className='bg-blue-500 p-2 font-bold text-white rounded-xl'>{item.node.tags}</span>
                        </div>
                        <p className='font-bold my-5'>{truncateText(item.node.content, 200)}</p>
                        <span><FavoriteBorder /></span>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Stories
