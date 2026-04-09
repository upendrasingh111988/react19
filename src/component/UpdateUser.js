import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getUserById, updateUser } from "../services/userService";

const UpdateUser = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    console.log("UpdateUser loaded");
    console.log("ID:", id);

    useEffect(() => {
        if (!id) return;

        getUserById(id)
            .then((res) => {
                console.log("API RESPONSE:", res);
                setUser(res);
                setLoading(false);
            })
            .catch(err => console.log(err));

    }, [id]);

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        updateUser(id, user)
            .then(() => navigate("/"))
            .catch(err => console.log(err));
    };

    if (loading) return <h2>Loading...</h2>;
    if (!user) return <h2>No User Found</h2>;

    return (
       
    <div className="card">
  <h2>Update User</h2>

  <form onSubmit={handleSubmit}>
    <input
      type="text"
      name="username"
      value={user.username || ""}
      onChange={handleChange}
      placeholder="Username"
    />

    <input
      type="email"
      name="email"
      value={user.email || ""}
      onChange={handleChange}
      placeholder="Email"
    />

    <input
      type="number"
      name="age"
      value={user.age || ""}
      onChange={handleChange}
      placeholder="Age"
    />

    <button className="btn-submit" type="submit">
      Update User
    </button>
  </form>
</div>
    );
};

export default UpdateUser;