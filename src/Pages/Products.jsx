import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../Services/firebase";

const Products = () => {
  const [value, setValue] = useState([]);

  const getDataFromFirebase = () => {
    getDocs(collection(db, "user"))
      .then((res) => setValue(res.docs.map((doc) => ({ id: doc.id, ...doc.data() }))))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getDataFromFirebase();
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
      {value.map((el) => (
        <div
          key={el.id}
          style={{
            height: "550px",
            width: "300px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "16px",
            margin: "16px",
            backgroundColor: "#f9f9f9",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <img
            src={el.image}
            alt={el.name}
            style={{
              width: "250px",
              height: "auto",
              borderRadius: "8px",
            }}
          />
          <h1
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              margin: "8px 0",
              color: "#333",
            }}
          >
            {el.name}
          </h1>
          <h2
            style={{
              fontSize: "18px",
              color: "#007bff",
              margin: "8px 0",
            }}
          >
            {el.price}
          </h2>
          <p
            style={{
              fontSize: "14px",
              color: "#666",
              margin: "8px 0",
            }}
          >
            {el.description}
          </p>
          <p
            style={{
              fontSize: "12px",
              color: "#888",
              margin: "8px 0",
              fontStyle: "italic",
            }}
          >
            {el.category}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Products;
