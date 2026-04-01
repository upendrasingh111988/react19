 import {use, useState}  from "react";
 import {createUser} from "../services/userService";

 function CreateUser() {

    const [user, setUser] = useState({
        username: "",
        email: "",
        age: ""
    });
    const handleChange= (event)=>{
        setUser({
            ...user, [event.target.name]: event.target.value
        });

    };
    const handleSubmit= async(event)=>{
        event.preventDefault();
        try{
            await createUser(user);
            alert("User created successfully");

        }catch(error){
            console.error("Error creating user:", error);
        }

    };
    return (
        <div className="card">
            <h1>create user</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Username" value={user.username} onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} />
                <input type="number" name="age" placeholder="Age" value={user.age} onChange={handleChange} />
                {/* <button type="submit" onClick={handleSubmit}>Create User</button> */}
                <button className="btn-submit" type="submit">
                    Create User
                </button>
            </form>
        </div>
    )
}
export default CreateUser;