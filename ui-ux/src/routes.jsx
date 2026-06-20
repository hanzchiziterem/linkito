import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";

const routes = [
  {
    element: <Layout />,
    children: [
        {path: "/", element: <HomePage />}
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
