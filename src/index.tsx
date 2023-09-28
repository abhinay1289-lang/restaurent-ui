import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/login/Login";
import Menucard from "./components/menucard";
import Products from "./components/headers/products";
import Profile from "./components/user-settings/profile";
import Dashboard from "./components/user-settings/Dashboard";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/menucard",
        element: <Menucard />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/Pricing",
        element: "Pricing",
      },
      {
        path: "/Dashboard",
        element: <Dashboard />,
      },
      {
        path: "/Profile",
        element: <Profile />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
