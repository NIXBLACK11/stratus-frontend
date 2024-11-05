import { Signin } from "../components/Signin";
import { Signup } from "../components/Signup";
import { useRecoilState } from "recoil";
import { signinState } from "../atom";

export const Login = () => {
    const [signin, _setSignin] = useRecoilState(signinState);
    return (
        <div className="flex h-screen w-screen bg-color justify-center items-center">
            {(signin) ? 
                <Signin/> :
                <Signup/>
            } 
        </div>
    )
} 