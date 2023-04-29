import Login from "./Login/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import Portal from "../Portal/Portal";
function SignIn() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/dashboard" element={<Portal />} />
        </Routes>
      </Router>
    </>
  );
}

export default SignIn;
