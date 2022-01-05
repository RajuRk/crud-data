import React, { useState, useContext } from "react";
import { userContext } from "../App";
import { useNavigate } from "react-router-dom";

function Adduser() {
  let context = useContext(userContext);
  const navigate = useNavigate();
  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let [gender, setGender] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");

  let handleSave = (e) => {
    e.preventDefault();
    context.data.push({
      name,
      age,
      gender,
      email,
      mobile,
    });
    navigate("/");
  };
  console.log(context);
  return (
    <div className="inner-sec">
      <h2 className="m-2">Add User</h2>
      <form>
        <div class="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label>Age</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter your Age"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label>Gender</label>
          <select
            className="form-control"
            onChange={(e) => setGender(e.target.value)}
          >
            <option>--Select Gender--</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div class="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label>Mobile</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter Mobile"
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={handleSave}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Adduser;
