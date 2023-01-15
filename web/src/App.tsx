import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./component/page/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/error" element={<div>404</div>} />
        <Route path="*" element={<Navigate to="/error" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
