import { useState } from "react"

const Reset = () => {

    const [email, setEmail] = useState<string>("");

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const getUser = async() => {
        
    }

    const sendMail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const response = await fetch(`http://localhost:8181/api/v1/user/forgotPassword`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email })
        });
        const json = await response.json();
        setLoading(false);

        if (!response.ok) {
            setEmail("");
            setError(json);
            return;
        }
        setError("");
        console.log(json);
    }



    return (
        <>
            {
                    <div className="flex justify-center my-20">
                        <form onSubmit={sendMail} className="flex flex-col items-start gap-5">
                            <p>Enter your email and we'll send you a reset link</p>
                            <input type="email" name="email" placeholder="enter email..." className="p-3 border focus:outline-none rounded" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <button type="submit" className="bg-gray-700 text-white p-2 disabled:bg-gray-900" disabled={loading}>Send Link</button>
                            {error.length > 0 && <span className="text-red-400">{error}</span>}
                        </form>
                    </div>
            }
        </>
    )
}

export default Reset
