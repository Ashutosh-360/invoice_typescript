import { useState } from "react";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import BigSpinner from "./Components/BigSpinner";
import Form from "./Components/Form";
import Invoices from "./Components/Invoices";
import Sidebar from "./Components/Sidebar";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        
      ],
    },
  ]);
  return <RouterProvider router={router} fallbackElement={<BigSpinner />} />;
};

export default App;
