import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AppProvider } from "./context/AppContext.jsx";
import { DoctorProvider } from "./context/DoctorContext.jsx";
import { AdminProvider } from "./context/AdminContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AdminProvider>
        <DoctorProvider>
          <AppProvider>
            <App />
          </AppProvider>
        </DoctorProvider>
      </AdminProvider>
    </BrowserRouter>
  </StrictMode>
);
