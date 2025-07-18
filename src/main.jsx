import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import { storeMuslim } from "./pages/muslim/storeMuslim.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={storeMuslim}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
