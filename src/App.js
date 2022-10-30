import "./App.css";
import { Routes, Route } from "react-router-dom";
import { CostumerList } from "./pages/CostumerList";
import { LoginAdm } from "./pages/LoginAdm";
import { useEffect } from "react";
import Cookie from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { ResetPassword } from "./pages/ResetPassword";
import { SignupAdm } from "./pages/SignupAdm";
import { CreateCustomer } from "./pages/CreateCustomer";
import { OfficeList } from "./pages/OfficeList";
import { SignupOffice } from "./pages/SignupOffice";
import { InfoBancaria } from "./pages/InfoBancaria";

function App() {
  const cookies = new Cookie();
  const navigate = useNavigate();
  useEffect(() => {
    const cookie = cookies.get("auth-token");
    if (cookie === undefined) {
      navigate("/");
    }
  }, []);
  return (
    <Routes>
      <Route path="/" element={<LoginAdm />} />
      <Route path="/signupadm" element={<SignupAdm />} />
      <Route path="/costumer-list" element={<CostumerList />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/create-customer" element={<CreateCustomer />} />
      <Route path="/office-list" element={<OfficeList />} />
      <Route path="/create-office" element={<SignupOffice />} />
    </Routes>
  );
}

export default App;
