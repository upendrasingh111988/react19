import { useEffect, useState } from "react";
import { getAllUsers } from "../services/userService";
import { useNavigate } from "react-router-dom";

function UsersList() {

  const [users, setUsers] = useState([]);
  const navigate = useNavigate();  // ✅ IMPORTANT

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const data = await getAllUsers();
      console.log("API Response:", data);
      setUsers(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleUpdate = (id) => {
    console.log("Navigating with ID:", id);
    navigate(`/update/${id}`);   // ✅ THIS FIXES EVERYTHING
  };

  return (
    // <div>
    //   <h2>Users List</h2>

    //   <table border="1">
    //     <thead>
    //       <tr>
    //         <th>ID</th>
    //         <th>Username</th>
    //         <th>Email</th>
    //         <th>Age</th>
    //         <th>Action</th> {/* ✅ New column */}
    //       </tr>
    //     </thead>

    //     <tbody>
    //       {users.map((user) => (
    //         <tr key={user.userId}>
    //           <td>{user.userId}</td>
    //           <td>{user.username}</td>
    //           <td>{user.email}</td>
    //           <td>{user.age}</td>

    //           <td>
    //             <button onClick={() => handleUpdate(user.userId)}>
    //               Update
    //             </button>
    //           </td>

    //         </tr>
    //       ))}
    //     </tbody>

    //   </table>
    // </div>
    <div className="card">
  <h2>Users List</h2>

  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Username</th>
        <th>Email</th>
        <th>Age</th>
        <th>Action</th>
      </tr>
    </thead>

    <tbody>
      {users.map((user) => (
        <tr key={user.userId}>
          <td>{user.userId}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.age}</td>
          <td>
            <button
              className="btn-update"
              onClick={() => handleUpdate(user.userId)}
            >
              Update
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  );
}

export default UsersList;