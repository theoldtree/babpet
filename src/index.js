import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { app, firestore } from "./firebase";
console.log(app, firestore);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
