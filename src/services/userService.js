const API_URL="http://localhost:8081/api";

export const createUser = async(user)=>{
    const response = await fetch(`${API_URL}/createUser`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });

    if(!response.ok){
        throw new Error("Failed to create user");
    }
    return response.json();
};

export const getAllUsers= async()=>{
    const response= await fetch(`${API_URL}/users`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });
    if(!response.ok){
        throw new Error("Failed to fetch users");
    }
    return response.json();

}