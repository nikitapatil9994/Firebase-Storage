import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../Services/firebase';

const Navbar = () => {
  const handleOut = () => {
    signOut(auth)
      .then(() => {
        alert('Logout successful');
      })
      .catch((err) => console.error(err));
  };

  return (
    <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      backgroundColor: "#f8f9fa",
      borderBottom: "1px solid #ddd",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    }}
  >
    <Link
      to="/"
      style={{
        textDecoration: "none",
        color: "#007bff",
        fontSize: "16px",
        fontWeight: "bold",
        marginRight: "16px",
      }}
    >
      Home
    </Link>
    <Link
      to="/products"
      style={{
        textDecoration: "none",
        color: "#007bff",
        fontSize: "16px",
        fontWeight: "bold",
        marginRight: "16px",
      }}
    >
      Products
    </Link>
    <Link
      to="/login"
      style={{
        textDecoration: "none",
        color: "#007bff",
        fontSize: "16px",
        fontWeight: "bold",
        marginRight: "16px",
      }}
    >
      Login
    </Link>
    <button
      onClick={handleOut}
      style={{
        padding: "8px 16px",
        backgroundColor: "#dc3545",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: "bold",
      }}
    >
      Logout
    </button>
  </div>
  
  );
};

export default Navbar;
