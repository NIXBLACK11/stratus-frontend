import { useNavigate, useParams } from "react-router-dom";
import { getCookie } from "../utils/saveCookie";
import { useEffect } from "react";
import { validate } from "../api/validate";
import { ErrorPopup } from "../components/ErrorPopup";
import { Menu } from "../components/Menu";
import { useRecoilState } from "recoil";
import { menuState, emailState, errorState, successState } from "../atom";
import { DetailedProject } from "../components/DetailedProject";
import { SuccessPopup } from "../components/SuccessPopup";
import { AddProject } from "../components/AddProject";
import { MonitorProjects } from "../components/MonitorProjects";

export const UserPage = () => {
    const [_email, setEmail] = useRecoilState(emailState);
    const [menu, _setMenu] = useRecoilState(menuState);
    const [error, setError] = useRecoilState(errorState);
    const [success, setSuccess] = useRecoilState(successState);

    const { email } = useParams<{ email: string }>();
    const token = getCookie("jwtToken");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            if (!email || !token) {
                setError("Invalid user");
                navigate("/");
                return;
            } else {
                const valid = await validate(email, token);
                if (!valid) {
                    setError("Invalid request");
                    navigate('/');
                    return;
                }
            }
            setEmail(email);
        };

        fetchData();
    }, [email, token, navigate]);

    return (
        <div className="m-0 p-0 bg-transparent">
            {error && <ErrorPopup message={error} onClose={() => setError(null)} />}
            {success && <SuccessPopup message={success} onClose={() => setSuccess(null)} />}    
            <div className="flex flex-row">
                <div className="w-[15%] min-h-screen m-0 p-0">
                    <Menu/>
                </div>
                <div className="w-[85%] min-h-screen m-0 p-0">
                    {menu=='Projects' && <DetailedProject/>}
                    {menu=="Add project" && <AddProject/>}
                    {menu=="Monitor projects" && <MonitorProjects/>}
                </div>
            </div>
        </div>
    )
};