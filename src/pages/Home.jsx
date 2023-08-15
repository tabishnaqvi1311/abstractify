import React, { useState } from 'react'
import {useNavigate} from "react-router"

const Home = () => {

    const [username, setUsername] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const CreateUserQuery = /* GraphQL */ `
        mutation UserCreate($username: String!) {
        userCreate(input: {username: $username}) {
            user {
                id
            }
        }
    }`

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:4000/graphql`, {
                method: "POST",
                headers: {
                    "x-api-key": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTIwMjA2NjksImlzcyI6ImdyYWZiYXNlIiwiYXVkIjoiMDFIN1Q0TVlIM0VNWEJIVEZLSlkwUzNETVEiLCJqdGkiOiIwMUg3VDRNWU5TSjg0OEpDMDRQNldBWDQ5SyIsImVudiI6InByb2R1Y3Rpb24iLCJwdXJwb3NlIjoicHJvamVjdC1hcGkta2V5In0.YpyyJvVhP--UPlJawdEa-iVsTAcOwwk1qpvj1LN_phY"
                },
                body: JSON.stringify({
                    query: CreateUserQuery,
                    variables: {
                        username: username
                    }
                })
            })
            const json = await response.json();
            if(json.errors){
                setError("Username is taken!")
                return
            }
            const user_id = json.data.userCreate.user.id
            localStorage.setItem("id", user_id);
        } catch (error) {
            console.warn(error.message);
        }
        navigate("/explore");

    }

    return (
        <div className='bg-[#f2f5fb] h-[90vh]'>
            <div className='flex flex-col justify-center pt-40 items-center'>
                <h1 className='lg:text-7xl font-bold text-5xl text-center'>Your Imagination. <br /> One <u className='text-blue-500'>Line</u> At A Time.</h1>
                <span className='my-5 text-xl text-center'>Experience A New Level Of Collaborative Storytelling</span>
                <h4 className='my-5'>What should we call you?</h4>

                <form autoComplete='off' autoSave='off' className='flex gap-3' onSubmit={handleSubmit}>
                    <input type='text' className='p-4 focus:outline-none bg-black text-white rounded-xl shadow-md font-semibold text-lg' placeholder='username...' value={username} onChange={e => setUsername(e.target.value)} />
                    <button type='submit' disabled={username.length < 5 || localStorage.getItem("id") ? true : false} className='bg-purple-500 px-4 rounded-xl shadow-md cursor-pointer disabled:bg-purple-800 text-white'>&rarr;</button>
                </form>
                <span className={error || username.length < 5 ? `block text-lg my-3 font-bold text-red-500` : `hidden`} >{error}</span>
            </div>

        </div>
    )
}

export default Home
