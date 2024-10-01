import { useRecoilState } from "recoil";
import { errorState } from "../atom";
import { useEffect, useState } from "react";
import { getCookie } from "../utils/saveCookie";
import { useNavigate, useParams } from "react-router-dom";
import { getProjects } from "../api/getProjects";
import { ProjectItem } from "./ProjectItem";

export const Projects = () => {
    const [_error, setError] = useRecoilState(errorState);
    const [projects, setProjects] = useState([""]);
    const { email } = useParams<{ email: string }>();

    const navigate = useNavigate();
    const token = getCookie("jwtToken");
    useEffect(() => {
        const fetchData = async () => {
            if(!email || !token) {
                setError("Invalid user");
                navigate("/");
                return;
            }
            const proj = await getProjects(email, token);
            if(proj==null) {
                setError("User has no projects");
                return;
            }
            setProjects(proj);
        }
        fetchData();
    }, [email, token, navigate]);

    return (
        <div className="h-screen flex flex-col items-start">
            {projects.map((item, index) => (
                <ProjectItem key={index} label={item} />
            ))}
        </div>
    )
}
