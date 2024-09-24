import { User } from "../interface/userInterface";

export function validateUserData(userData: User) :boolean{
    if(!userData.email || !userData.password) {
        return false;
    }
    return true;
}