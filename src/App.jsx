import { useState } from "react";

import ProductContextData from "./context/ProductContextData";
import Routes from "./routes";
import "./App.css";
import Pagenation from "./components/products/Pagenation";
import UserContextData from "./context/UserContextData";
// import UserContextData from "./context/UserContextData";

function App() {
  return (
    <div className="app">
      <UserContextData>
        <ProductContextData>
          <Routes />
          {/* <Pagenation/> */}
        </ProductContextData>
      </UserContextData>
    </div>
  );
}

export default App;
