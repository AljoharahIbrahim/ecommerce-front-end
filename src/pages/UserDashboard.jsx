import React from "react";
import Profile from "./Profile";
import { useLocation } from "react-router-dom";

export default function UserDashboard() {
    console.log("!!!!UserDashboard");
      const { state } = useLocation();
      console.log("state", state);
  return (
    <div>
      <div className="dashboard">
        <div className="header">
          <h1>User Dashboard</h1>
        </div>
        <div className="chip-container">
          <div className="chip">Buy Product</div>
          {/* <div className="chip">New</div>
          <div className="chip">Pending</div>
          <div className="chip">Completed</div> */}
        </div>
        <div className="content">
          <div>
            <div className="profile">
              <div className="profile-header">
                <h1 className="profile-name">{state.userName}</h1>
              </div>
              <div className="profile-info">
                <p className="profile-item">
                  <strong>Phone:</strong> {state.phoneNumber}
                </p>
                <p className="profile-item">
                  <strong>Address:</strong> {state.address}
                </p>
                <p className="profile-item">
                  <strong>Email:</strong> {state.email}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
