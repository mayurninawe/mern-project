import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const User = () => {
  const [user, setuser] = useState({
    username: "",
    description: "",
    duration: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  });

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:4001/exercise/${id}`);
    setuser(result.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        Back to Home
      </Link>
      <h1 className="display-4"> User id: {id}</h1>
      <ul className="list-group w-50">
        <li className="list-group-item">Username: {user.username}</li>
        <li className="list-group-item">Description: {user.description}</li>
        <li className="list-group-item">Duration: {user.duration}</li>
      </ul>
    </div>
  );
};

export default User;
