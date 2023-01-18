import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css";
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  // <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  // </React.StrictMode>
);
