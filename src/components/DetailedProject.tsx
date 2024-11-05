import { useRecoilState } from "recoil";
import { editState, errorState } from "../atom";
import { useEffect, useState } from "react";
import { getCookie } from "../utils/saveCookie";
import { useNavigate, useParams } from "react-router-dom";
import { getProjects } from "../api/getProjects";
import { DetailedProjectItem } from "./DetailedProjectItem";
import { getDetailedProjects } from "../api/getDetailedProjects";
import { EditProjectPopup } from "./EditProjectPopup";

export const DetailedProject = () => {
    const [openEdit, _setOpenEdit] = useRecoilState(editState);
    const [_error, setError] = useRecoilState(errorState);
    const [projects, setProjects] = useState<string[]>([]);
    const [detailedProject, setDetailedProject] = useState<any[]>([]);
    const { email } = useParams<{ email: string }>();

    const navigate = useNavigate();
    const token = getCookie("jwtToken");

    useEffect(() => {
        const fetchData = async () => {
            if (!email || !token) {
                setError("Invalid user");
                navigate("/");
                return;
            }

            const proj = await getProjects(email, token);
            if (proj == null) {
                setError("User has no projects");
                return;
            }
            setProjects(proj);

            const detailedProjPromises = proj.map(async (projName: string) => {
                const details = await getDetailedProjects(email, projName, token);
                if (!details) {
                    console.log(`Failed to fetch details for ${projName}`);
                    return null;
                }
                return details;
            });

            const resolvedDetailedProjects = await Promise.all(detailedProjPromises);
            const validDetailedProjects = resolvedDetailedProjects.filter(Boolean);

            setDetailedProject(validDetailedProjects);
        };

        fetchData();
    }, [email, token, navigate, setError]);

    return (
        <>
            {openEdit && <EditProjectPopup/>}
            <div className="h-screen flex flex-col items-start w-full">
                {projects.map((projName, index) => (
                    <DetailedProjectItem
                        key={index}
                        label={projName}
                        details={detailedProject[index]}
                        projects={projects}
                        setProjects={setProjects}
                    />
                ))}
            </div>
        </>
    );
};
