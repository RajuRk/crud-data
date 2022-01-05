import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Allusers from "./components/Allusers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Adduser from "./components/Adduser";
import EditUser from "./components/EditUser";
import { Link } from "react-router-dom";

export const userContext = React.createContext();

function App() {
  let [data, setData] = useState([
    {
      name: "Jhon",
      age: "26",
      gender: "Male",
      email: "jhon@gmail.com",
      mobile: "9999988888",
    },
    {
      name: "Rose",
      age: "24",
      gender: "Female",
      email: "rose@gmail.com",
      mobile: "9865986956",
    },
  ]);

  return (
    <div className="container">
      <Router>
        <userContext.Provider value={{ data, setData }}>
          <nav class="navbar navbar-light bg-dark p-3">
            <form class="form-inline">
              <button className="btn btn-primary list-btn" type="button">
                <Link to="/adduser">Add User</Link>
              </button>
              &nbsp;
              <button className="btn btn-success list-btn" type="button">
                <Link to="/">User List</Link>
              </button>
            </form>
          </nav>
          <Routes>
            <Route path="/" element={<Allusers />} />
            <Route path="/adduser" element={<Adduser />} />
            <Route path="/edituser/:id" element={<EditUser />} />
          </Routes>
        </userContext.Provider>
      </Router>
    </div>
  );
}

export default App;
