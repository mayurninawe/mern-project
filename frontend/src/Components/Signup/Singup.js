import React, { useState, useEffect } from "react";
import "./Singup.css";
import { useNavigate } from "react-router-dom";

export default function Singup() {
  // setting the data blank initally
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Navigateto = useNavigate();

  // it will check if user is already sign in then it must not go to signin page again //by click or by address
  useEffect(() => {
    // getting localstorage for user
    const auth = localStorage.getItem("user");
    // if get localstorage then
    if (auth) {
      Navigateto("/");
    }
  });
  // posting/fetching the data and pushing the header as well
  const collectSignupData = async () => {
    let result = await fetch("http://localhost:4001/signup", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    // the result is in promise - so we have to get the data from promise using ".json"
    result = await result.json();
    // seeting the user in localstorage so if user already login in then it must not go to signup again and again
    localStorage.setItem("user", JSON.stringify(result));
    // once user signup we are redirecting the page towards login
    Navigateto("/login");
  };

  return (
    <div className="signup-container">
      <div className="signup-input-container">
        <input
          type="text"
          placeholder="add username"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br></br>
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
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br></br>
        <div className="singUpBtn" onClick={collectSignupData}>
          <span>Singup</span>
        </div>
        <div className="orr">OR</div>
        <div className="singUpBtn">
          <span>Login</span>
        </div>
      </div>
    </div>
  );
}
