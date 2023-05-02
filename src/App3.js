import React from "react";
import { useEffect, useState } from "react";
import { GlobalProvider } from "./context/globalContext";

import { auth } from "./connections/firebase";
import Portal from "./Pages/Portal/Portal";
import Login from "./Pages/SignIn/Login/Login";
import LoginDev from "./Pages/SignIn/Login Dev/Login";

function App3() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email,
      };
      if (userAuth) {
        console.log(userAuth);
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);
  return (
    <GlobalProvider>
      <div>{user ? <Portal /> : <LoginDev />}</div>
    </GlobalProvider>
  );
}

export default App3;
