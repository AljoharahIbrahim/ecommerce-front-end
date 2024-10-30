import { useState } from "react";

import ProductContextData from "./context/ProductContextData";
import Routes from "./routes";
import "./App.css";

function App() {
  return (
    <>
      <ProductContextData>
        <Routes />
      </ProductContextData>
    </>
  );
}

export default App;
