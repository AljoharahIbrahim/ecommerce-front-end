import { useState } from "react";

import ProductContextData from "./context/ProductContextData";
import Routes from "./routes";
import "./App.css";

function App() {
  return (
    <div className="app">
      <ProductContextData>
        <Routes />
      </ProductContextData>
    </div>
  );
}

export default App;
