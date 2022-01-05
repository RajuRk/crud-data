import React, { useState, useContext, useEffect } from "react";
import { userContext } from "../App";
import { useNavigate, useParams } from "react-router-dom";
import { getDefaultNormalizer } from "@testing-library/react";

function EditUser(props) {
  useEffect(() => {
    {
      console.log(params.id);
      if (params.id) {
        getData();
      }
    }
  }, []);
  let context = useContext(userContext);
  const navigate = useNavigate();
  let params = useParams();

  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let [gender, setGender] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");

  let handleSave = (e) => {
    e.preventDefault();
    context.data[params.id] = {
      name,
      age,
      gender,
      email,
      mobile,
    };
    context.setData([...context.data]);
    navigate("/");
  };

  let getData = () => {
    let data = context.data[params.id];
    console.log(context.data[params.id]);
    setName(data.name);
    setAge(data.age);
    setGender(data.gender);
    setEmail(data.email);
    setMobile(data.mobile);
  };

  return (
    <div className="inner-sec">
      <h2 className="m-2">Edit User</h2>
      <form>
        <div class="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label>Age</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter your Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label>Gender</label>
          <select
            className="form-control"
            value={gender}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label>Mobile</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter Mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" onClick={handleSave}>
          Update
        </button>
      </form>
    </div>
  );
}

export default EditUser;
