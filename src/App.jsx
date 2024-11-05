import { useState } from "react";

import ProductContextData from "./context/ProductContextData";
import Routes from "./routes";
import "./App.css";
import Pagenation from "./components/products/Pagenation";

function App() {
  return (
    <div className="app">
      <ProductContextData>
        <Routes />
        {/* <Pagenation/> */}
      </ProductContextData>
    </div>
  );
}

export default App;
