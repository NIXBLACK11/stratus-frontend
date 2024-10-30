import axios, { AxiosError } from "axios";
import { BACKEND_URL } from './backend_url';
import { Details } from "../interface/detailsInterface";

export async function addProject(email: string, token: string, projectDetails: Details): Promise<boolean> {
    try {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': token
        };

        const data = {
            username: email,
            projectname: projectDetails.projectname,
            alerttriggers: projectDetails.AlertTriggers?.map(trigger => ({
                sitename: trigger.sitename,
                siteurl: trigger.siteurl,
                alerttype: trigger.alerttype
            }))
        };

        const url = BACKEND_URL+email+'/addProject';

        const response = await axios.post(url, data, { headers });
        if (response.status === 200) {
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
                return false;
            } else {
                console.log("An error occurred during the request");
                return false;
            }
        }
        return false;
    }
}