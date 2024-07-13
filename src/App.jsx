import React from "react";
import "./App.css";
import Carts from "./component/carts";


function App() {
  return (
    <div>
      <Carts />
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; Your Website 2023
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
