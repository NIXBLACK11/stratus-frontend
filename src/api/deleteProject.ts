import axios, { AxiosError } from "axios";
import { BACKEND_URL } from './backend_url';

export async function deleteProject(email: string, projectName: string, token: string): Promise<boolean> {
    try {
        const response = await axios.delete(`${BACKEND_URL}/${email}/${projectName}`, {
            headers: {
                'Authorization': token
            }
        });

        if (response.status === 200 || response.status === 204) {
            console.log("Project deleted successfully");
            return true;
        } else {
            console.log(`Unexpected response status: ${response.status}`);
            return false;
        }
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError: AxiosError = error;
            console.log(axiosError);
            if (axiosError.response && axiosError.response.status === 401) {
                console.log("Unauthorized");
            } else if (axiosError.response && axiosError.response.status === 404) {
                console.log("Project not found");
            } else {
                console.log("An error occurred during the delete request");
            }
        }
        return false;
    }
}
