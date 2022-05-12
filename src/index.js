import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./Components/App/App.jsx";
import "./normalize.css";
import "./index.scss";

const container = document.getElementById("app");
const app = createRoot(container);

app.render(
    <App />
);
