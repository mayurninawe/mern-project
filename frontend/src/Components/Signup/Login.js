import React, { useState, useEffect } from "react";
import "./Singup.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Navigateto = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      Navigateto("/");
    }
  });
  const handleLogin = async () => {
    console.log(email, password);
    let result = await fetch("http://localhost:4001/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    result = await result.json();
    if (result.name) {
      localStorage.setItem("user", JSON.stringify({ result }));
      Navigateto("/");
    } else {
      alert("user not found");
    }
  };
  return (
    <div className="signup-container">
      <div className="signup-input-container">
        <input
          type="text"
          placeholder="add email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br></br>
        <input
          type="password"
          placeholder="add password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <div className="singUpBtn" onClick={handleLogin}>
          <span>Login</span>
        </div>
        <div className="orr">OR</div>
        <div className="singUpBtn">
          <span>Singup</span>
        </div>
      </div>
    </div>
  );
}
