import React from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import { GlobalProvider } from "./context/globalContext";
import Portal from "./Pages/Portal/Portal";
import SignIn from "./Pages/SignIn/signIn";

function App2() {
  return (
    <GlobalProvider>
      <SignIn />
    </GlobalProvider>
  );
}

export default App2;
