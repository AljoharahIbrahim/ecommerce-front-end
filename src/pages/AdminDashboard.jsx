import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function AdminDashboard() {
  console.log("!!!!AdminDashboard");
  const { state } = useLocation();
  console.log("state", state);
    return (
      <div className="dashboard-container">
        <header>
          <h1>Admin Dashboard</h1>
        </header>
        <div className="chip-container">
          <Link to="/dashboard/admins/addProduct" className="chip">
            Add Product
          </Link>
          <Link to="/dashboard/admins/updateProduct" className="chip">
            Update Product
          </Link>
          <Link to="/dashboard/admins/deleteProduct" className="chip">
            Delete Product
          </Link>
        </div>
        <div className="profile-container">
          <h2>Profile Information</h2>
          <p className="profile-item">
            <strong>Name:</strong>
            {state.userName}{" "}
          </p>{" "}
          <p className="profile-item">
            <strong>Phone:</strong> {state.phoneNumber}{" "}
          </p>{" "}
          <p className="profile-item">
            <strong>Address:</strong> {state.address}{" "}
          </p>{" "}
          <p className="profile-item">
            <strong>Email:</strong> {state.email}{" "}
          </p>
        </div>
      </div>
    );
}
