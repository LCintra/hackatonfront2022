import "./App.css";
import { Routes, Route } from "react-router-dom";
import { CostumerList } from "./pages/CostumerList";
import { LoginAdm } from "./pages/LoginAdm";
import { useEffect } from "react";
import Cookie from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { ResetPassword } from "./pages/ResetPassword";
import { SignupAdm } from "./pages/SignupAdm";

function App() {
  const cookies = new Cookie();
  const navigate = useNavigate();
  useEffect(() => {
    const cookie = cookies.get("auth-token");
    if (cookie === undefined) {
      navigate("/loginadm");
    } else {
      navigate("/costumer-list");
    }
  }, []);
  return (
    <Routes>
      <Route path="/loginadm" element={<LoginAdm />} />
      <Route path="/signupadm" element={<SignupAdm />} />
      <Route path="/costumer-list" element={<CostumerList />} />
      <Route path="/reset-password" element={<ResetPassword />} />
    </Routes>
  );
}

export default App;
