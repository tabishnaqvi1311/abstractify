import ReactSelect from "react-select"
import { genres } from "../constant/genre"
import { useState } from "react";

const Seed = () => {

    const [title, setTitle] = useState<string>("");
    const [genre, setGenre] = useState(null);
    const [initialChapterTitle, setInitialChapterTitle] = useState("");
    const [initialChapterContent, setInitialChapterContent] = useState("");

    const handleCreateStory = async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:8181/api/v1/story/createStory`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("auth-token")
            },
            body: JSON.stringify({
                title,
                author: localStorage.getItem("userId"),
                genre: genre.label
            })
        });
        const json = await response.json();
        if(response.ok){
            setTitle("");
            setGenre(null);
        }
        console.log(json);
    }

    return (
        <div className="p-20">
            <h1 className="text-purple-500 text-6xl font-black">Seed a story</h1>
            <p className="text-blue-800 text-2xl font-black">- and watch it grow.</p>
            <form className="flex flex-col w-1/2 gap-10 p-10" onSubmit={handleCreateStory}>
                <div className="flex flex-col">
                    <label htmlFor="">Title*</label>
                    <input type="text" placeholder="An interesting title..." className="p-3 focus:outline-none text-white border rounded-xl bg-gray-900" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="genre">Genre*</label>
                    <ReactSelect options={genres} defaultValue={genre} onChange={setGenre} />
                </div>

                {/* add initial chapter stuff */}

                <button type="submit" className="bg-purple-500 text-white p-2 w-1/2">Create Story &rarr;</button>
            </form>
        </div>
    )
}

export default Seed
