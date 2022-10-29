import "./App.css";
import { Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import { LoginAdm } from "./pages/LoginAdm";

function App() {
  return (
    <Routes>
      <Route path="/loginadm" element={<LoginAdm />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
