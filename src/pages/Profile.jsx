import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Profile() {
    const { state } = useLocation();
    console.log("state",state);
  return (
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
  );
}
