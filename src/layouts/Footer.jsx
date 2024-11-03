import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <p> e-commerce website &copy; {new Date().getFullYear()}</p>
      </div>
    </div>
  );
}
