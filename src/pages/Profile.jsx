import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Profile() {
    const { state } = useLocation();
    console.log("state",state);
  return (
    <div>
      <div class="profile">
        <div class="profile-header">
          <h1 class="profile-name">{state.userName}</h1>
        </div>
        <div class="profile-info">
          <p class="profile-item">
            <strong>Phone:</strong> {state.phoneNumber}
          </p>
          <p class="profile-item">
            <strong>Address:</strong> {state.address}
          </p>
          <p class="profile-item">
            <strong>Email:</strong> {state.email}
          </p>
        </div>
      </div>
    </div>
  );
}
