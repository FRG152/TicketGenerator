import { useState } from "react";
import FormPage from "./pages/FormPage";
import TicketPage from "./pages/TicketPage";
import { Route, Routes } from "react-router";

function App() {
  const [data, setData] = useState({
    avatar: "",
    full_name: "",
    email_address: "",
  });

  return (
    <Routes>
      <Route path="/" element={<FormPage setData={setData} />} />
      <Route path="/ticket" element={<TicketPage />} />
    </Routes>
  );
}

export default App;
