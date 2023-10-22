import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className="text-center flex flex-col justify-center gap-10 text-gray-900 h-screen">
        <h1 className="text-6xl font-black">Building Worlds, One Line at a Time</h1>
        <p className="text-xl">A Global Community of Storytellers Crafting Narratives That Resonate, Inspire, and Connect Hearts.</p>
        <div className="flex gap-5 justify-center">
            <Link to={"/feed"} className="bg-gray-900 text-white p-4 rounded-2xl">Explore</Link>
            <Link to={"/seed"} className="bg-purple-700 text-white p-4 rounded-2xl">Start Writing</Link>
        </div>
    </div>
  )
}

export default Hero
