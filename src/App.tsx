import FormPage from "./pages/FormPage";
import TicketPage from "./pages/TicketPage";
import { Navigate, Route, Routes } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FormPage />} />
      <Route path="*" element={<Navigate to={"/"} />} />
      <Route path="/ticket" element={<TicketPage />} />
    </Routes>
  );
}

export default App;
