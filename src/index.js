import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./styles/GlobalStyle";
import { GlobalProvider } from "./context/globalContext";
import SignIn from "./Pages/SignIn/signIn";
import App2 from "./App2";
import App3 from "./App3";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App2 /> */}
    <App3 />
  </React.StrictMode>
);
