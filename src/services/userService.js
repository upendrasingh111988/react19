import api from "../api/axios";

export const createUser = async (user) => {
    const response = await api.post("/api/createUser", user);
    return response.data;
};

export const getAllUsers = async () => {
    const response = await api.get("/api/users");
    return response.data;
};

export const getUserById = async (id) => {
    const response = await api.get(`/api/users/${id}`);
    return response.data;
};

export const updateUser = async (userId, user) => {
    const response = await api.put(`/api/users/${userId}`, user);
    return response.data;
};