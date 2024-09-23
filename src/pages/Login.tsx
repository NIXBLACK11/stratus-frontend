import { useState } from "react"
import { Signin } from "../components/Signin";
import { Signup } from "../components/Signup";

export const Landing = () => {
    const [signin, setSignin] = useState(false);
    return (
        <div className="flex h-screen w-screen bg-color justify-center items-center">
            {(signin) ? 
                <Signin
                    setSignin
                /> :
                <Signup
                    setSignin
                />
            } 
        </div>
    )
} 