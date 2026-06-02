import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { FavoritosProvider } from "./contexts/FavoritosContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <FavoritosProvider>
    <App />
  </FavoritosProvider>
);