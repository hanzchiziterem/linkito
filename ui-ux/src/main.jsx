import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import {Toaster} from "react-hot-toast";
import router from "./routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster position="bottom-center" reverseOrder={false} />
    <RouterProvider router={router} />
  </StrictMode>,
);
