import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./styles/GlobalStyle";
import { GlobalProvider } from "./context/globalContext";
import SignIn from "./Pages/SignIn/signIn";
import App2 from "./App2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <GlobalStyle /> */}
    {/* <GlobalProvider> */}
    {/* <App /> */}
    {/* <SignIn />
    </GlobalProvider> */}
    <App2 />
  </React.StrictMode>
);
