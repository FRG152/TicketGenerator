import "./App.css";
import "aos/dist/aos.css";
import AOS from "aos";
import App from "./App.tsx";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { GlobalProvider } from "./context/index.tsx";
AOS.init();

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </BrowserRouter>
);
