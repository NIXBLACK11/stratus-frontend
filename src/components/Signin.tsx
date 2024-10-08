import { useState } from 'react';
import { ErrorPopup } from './ErrorPopup';
import { Eye, EyeOff } from 'lucide-react';
import { useRecoilState } from 'recoil';
import { signinState } from '../atom';
import { signin } from '../api/signin';
import { useNavigate } from 'react-router-dom';

export const Signin = () => {
    const [_signin, setSignin] = useRecoilState(signinState);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleSignin = async () => {
        const success = await signin({
            email,
            password
        });

        if(success==false) {
            setError("Unable to signin!!");
        } else {
           navigate(`../user/${email}`);
        }
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign in to Stratus</h1>
        
        {error && <ErrorPopup message={error} onClose={() => setError(null)} />}
        <form onSubmit={(e) => { e.preventDefault(); handleSignin(); }} className="space-y-4">
            <div>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
            />
            </div>
            
            <div className="relative">
            <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
            />
            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            </div>
            
            <div className='my-8'></div>
            <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-300"
            >
            Sign in
            </button>
        </form>
        
        <div className="my-20 text-center"></div>
        
        <p className="mt-6 text-center text-sm">
            Already have an account? <a onClick={() => setSignin(false)} className="text-blue-600 hover:underline">Sign In now</a>
        </p>
        </div>
    );
    };