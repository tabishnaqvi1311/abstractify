import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

const SignupModal = () => {

    const {dispatch} = useAuthContext();

    const [toggle, setToggle] = useState<Boolean>(false);

    const [email, setEmail] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:8181/api/v1/user/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                username,
                password
            })
        })
        const json = await response.json();
        setEmail("");
        setUsername("");
        setPassword("");

        if (!response.ok) {
            setError(json);
            return;
        }

        setToggle(false);
        localStorage.setItem("auth-token", json.token);
        localStorage.setItem("userId", json.userId);
        dispatch({type: "LOGIN", payload: json});
        navigate("/");
        console.log(json);
    }

    return (
        <div>
            <button onClick={() => setToggle(!toggle)} className="">Signup</button>
            {
                toggle &&
                (
                    <>
                        <div className="absolute z-0 top-0 right-0 bottom-0 left-0 bg-black bg-opacity-60 " onClick={()=>setToggle(!toggle)}></div>
                        <div className="absolute z-0 top-1/4 left-1/2 border right-1/2 bottom-1/2 flex flex-col gap-5 items-center ">
                            <form onSubmit={handleSignup} className="bg-white flex flex-col items-center gap-5 border p-10 rounded text-black">
                                <h1 className="text-2xl font-bold text-purple-600">abstractify</h1>
                                <input type="email" placeholder="enter email..." className="p-3 border focus:outline-none rounded focus:bg-gray-100" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <input type="text" placeholder="enter username..." className="p-3 border focus:outline-none rounded focus:bg-gray-100" value={username} onChange={(e) => setUsername(e.target.value)} />
                                <input type="password" placeholder="enter password..." className="p-3 border focus:outline-none rounded focus:bg-gray-100" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <button className="bg-gray-800 hover:bg-gray-900 text-white p-2 w-full" type="submit">Sign Up</button>
                                {error.length > 0 && <span className="text-sm text-red-400">{error}</span>}
                            </form>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default SignupModal
