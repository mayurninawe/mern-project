import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loaduser();
  }, []);

  const loaduser = async () => {
    const result = await axios.get("http://localhost:4001/exercise/");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:4001/exercise/${id}`);
    loaduser();
  };
  return (
    <div className="container">
      <div className="py-4">
        <h1>Home</h1>
        <table className="table">
          <thead>
            <tr className="bg-dark text-white">
              <th scope="col">Sr. No</th>
              <th scope="col">Username</th>
              <th scope="col">Address</th>
              <th scope="col">Count</th>
              <th scope="col">Functions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.username}</td>
                <td>{user.description}</td>
                <td>{user.duration}</td>
                <td>
                  <Link
                    className="btn btn-primary m2"
                    to={`/exercise/view/${user._id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-warning m2"
                    to={`/exercise/edit/${user._id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    className="btn btn-danger m2"
                    onClick={() => {
                      deleteUser(user._id);
                    }}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
