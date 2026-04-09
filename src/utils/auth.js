import { data } from "react-router-dom";

export const login = (data) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("username", data.username);
    localStorage.setItem("role", data.role);
    // If backend not sending role, decode or hardcode for now
    // localStorage.setItem("role", data.role);
};

export const logout = () => {
    localStorage.clear();
};

export const getToken = () => localStorage.getItem("token");

export const getRole = () => localStorage.getItem("role");  
export const getUsername = () => localStorage.getItem("username");

export const isLoggedIn = () => !!getToken();