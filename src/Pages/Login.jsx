import React, { useState } from "react";
import GoogleButton from "react-google-button";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../Services/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle Google Sign-In
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  // Handle Email/Password Login
  const handleLogin = (email, password) => {
    console.log("Login with email:", email, " password:", password);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password); 
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f4f4f9",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "400px",
          width: "100%",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#333",
            marginBottom: "20px",
          }}
        >
          Login Page
        </h1>
        <hr style={{ marginBottom: "20px" }} />

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="email"
              style={{
                display: "block",
                marginBottom: "8px",
                fontSize: "14px",
                color: "#555",
              }}
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ddd",
                fontSize: "14px",
              }}
              required
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="password"
              style={{
                display: "block",
                marginBottom: "8px",
                fontSize: "14px",
                color: "#555",
              }}
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ddd",
                fontSize: "14px",
              }}
              required
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              fontSize: "16px",
              cursor: "pointer",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            Login
          </button>
        </form>

        <p
          style={{
            textAlign: "center",
            margin: "15px 0",
            color: "#555",
            fontSize: "14px",
          }}
        >
          Or
        </p>

        <GoogleButton
          onClick={handleGoogleLogin}
          style={{
            width: "100%",
            margin: "0 auto",
            display: "block",
          }}
        />
      </div>
    </div>
  );
};

export default Login;
