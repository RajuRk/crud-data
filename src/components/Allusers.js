import React, { useContext } from "react";
import { userContext } from "../App";

function Allusers() {
  let context = useContext(userContext);

  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Option</th>
          </tr>
        </thead>
        <tbody>
          {context.data.map((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e.name}</td>
                <td>{e.age}</td>
                <td>{e.gender}</td>
                <td>{e.email}</td>
                <td>{e.mobile}</td>
                <td>
                  <button className="btn btn-primary">Edit</button>&nbsp;
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Allusers;
