const API_URL = "http://localhost:8081/api";

export const createUser = async (user) => {
    const response = await fetch(`${API_URL}/createUser`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });

    if (!response.ok) {
        throw new Error("Failed to create user");
    }

    return response.json();
};

export const getAllUsers = async () => {
    const response = await fetch(`${API_URL}/users`);

    if (!response.ok) {
        throw new Error("Failed to fetch users");
    }

    return response.json();
};

export const getUserById = async (id) => {
    const response = await fetch(`${API_URL}/users/${id}`);

    if (!response.ok) {
        throw new Error("Failed to fetch user");
    }

    return response.json();
};

export const updateUser = async (userId, user) => {
    const response = await fetch(`${API_URL}/users/${userId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });

    if (!response.ok) {
        throw new Error("Failed to update user");
    }

    return response.json();
};