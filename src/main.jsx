import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import AuthProviderComponent from "./AuthContextProvider/AuthProviderComponent";
import { HelmetProvider } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProviderComponent>
        <RouterProvider router={router}></RouterProvider>
      </AuthProviderComponent>
    </HelmetProvider>
  </React.StrictMode>
);
