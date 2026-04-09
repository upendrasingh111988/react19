import { useState } from "react";
import api from "../api/axios";
import { login } from "../utils/auth";
import { useNavigate } from "react-router-dom";

function Login(){

    const [form , setForm] = useState({
        username:"",
        password:""
    }
);
const navigate = useNavigate();

const handleLogin = async () =>{
    try{
        const res = await api.post("/auth/login", form);
        login(res.data);
         alert("Login successful ✅");
        navigate("/");

    }catch(err){
        alert("Login failed ❌");
    }
};
 return(
    <div className="login-container">
        <h2>Login</h2>
        <input type="text" placeholder="Username" value={form.username} onChange={(e) => setForm({...form, username: e.target.value})} />
        <input type="password" placeholder="Password" value={form.password} onChange={(e) => setForm({...form, password: e.target.value})} />
        <button onClick={handleLogin}>Login</button>
    </div>
 );

}
export default Login;