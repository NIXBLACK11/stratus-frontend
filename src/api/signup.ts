import axios, { AxiosError } from "axios";

import { BACKEND_URL } from './backend_url';
import { User } from "../interface/userInterface";

export async function signup(userData: User): Promise<boolean> {
    try {
        const data = {
            Username: userData.email,
            Password: userData.password
        }
        
        const response = await axios.post(`${BACKEND_URL}signup`, data);
        if(response.status!=200) {
            return false;
        }
        return true;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError: AxiosError = error;
            console.log(axiosError);
            if (axiosError.response && axiosError.response.status === 401) {
                console.log("Unauthorized - Username or password incorrect");
            } else {
                console.log("An error occurred during signup");
            }
        }
        return false;
    }
}