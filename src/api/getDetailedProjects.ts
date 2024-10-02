import axios, { AxiosError } from "axios";
import { BACKEND_URL } from './backend_url';

export async function getDetailedProjects(email: string, projectName: string, token: string): Promise<string[] | null> {
    try {
        const response = await axios.get(`${BACKEND_URL}/${email}/${projectName}`, {
            headers: {
                'Authorization': token
            }
        });
        if (response.status === 200) {
            const projects = response.data.projectdetails;
            return projects;
        } else {
            console.log(`Unexpected response status: ${response.status}`);
            return null;
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError: AxiosError = error;
            console.log(axiosError);
            if (axiosError.response && axiosError.response.status === 401) {
                console.log("Unauthorized");
                return null;
            } else {
                console.log("An error occurred during the request");
                return null;
            }
        }
        return null;
    }
}