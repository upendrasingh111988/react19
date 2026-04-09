import "./App.css";
import CreateUser from "./component/CreateUser";
import UsersList from "./component/UsersList";
import UpdateUser from "./component/UpdateUser";
import { Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Login from "./pages/Login";
import ProtectedRoute from "./component/ProtectedRoute";


function App() {
  return (
    <div className="App">
      <Header />

      <div className="main-content">
        <Routes>
           {/* ✅ Public Route */}
           <Route path ="/login" element={<Login />} />

           {/* ✅ Protected Routes */}
          
          <Route path="/create" element={<ProtectedRoute><CreateUser /></ProtectedRoute>} />
          <Route path="/update/:id" element={<ProtectedRoute><UpdateUser /></ProtectedRoute>} />
         
          <Route path="/" element={<UsersList />} />
         
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;