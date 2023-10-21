import { useState } from "react";
import { useParams } from "react-router-dom";

const ResetForm = () => {

    const params = useParams();
    console.log(params);

    const [error, setError] = useState<string>("");

    const [password, setPassword] = useState<string>("");
    const [repeatPassword, setRepeatPassword] = useState<string>("");


    const resetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (password !== repeatPassword) {
            setError("passwords do not match");
            return;
        }
        const response = await fetch(`http://localhost:8181/api/v1/resetPassword/${params.id}/${params.token}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                password,
                repeatPassword
            })
        });
        const json = await response.json()
        if (!response.ok) {
            setPassword("");
            setRepeatPassword("");
            setError(json);
            return;
        }
        setError("");
        console.log(json);

    }

    return (
        <div>
            <form onSubmit={resetPassword} className="flex flex-col items-start gap-5">
                <input type="password" name="password" placeholder="enter password" className="p-3 border focus:outline-none rounded" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="password" name="reppassword" placeholder="confirm password" className="p-3 border focus:outline-none rounded" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
                <button type="submit" className="bg-gray-800 text-white p-2">Reset</button>
                {error.length > 0 && <span className="text-red-400">{error}</span>}
            </form>
        </div>
    )
}

export default ResetForm
