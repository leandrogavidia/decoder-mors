import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";

const container = document.getElementById("app");
const app = createRoot(container);

console.log("Todo en ornde");

app.render(
    <App />
);
