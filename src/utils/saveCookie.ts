import Cookies from 'js-cookie';

// Function to set a cookie
export const setCookie = (key: string, value: string, options?: Cookies.CookieAttributes): void => {
    Cookies.set(key, value, options);
};

// Function to get a cookie
export const getCookie = (key: string): string | undefined => {
    return Cookies.get(key);
};