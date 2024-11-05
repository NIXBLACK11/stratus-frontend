import axios, { AxiosError } from 'axios';

import { BACKEND_URL } from './backend_url';
import { setCookie } from "../utils/saveCookie";
import { User } from "../interface/userInterface";

export async function signin(userData: User): Promise<boolean> {
    try {
        const data = {
            Username: userData.email,
            Password: userData.password
        }
        
        const response  = await axios.post(`${BACKEND_URL}login`, data);
        const token = response.data.token;

        if(!token) {
            return false;
        }
        setCookie("jwtToken", token);
        return true;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError: AxiosError = error;
            console.log(axiosError);
            if (axiosError.response && axiosError.response.status === 401) {
                console.log("Unauthorized - Username or password incorrect");
            } else {
                console.log("An error occurred during signin");
            }
        }
        return false;
    }
}