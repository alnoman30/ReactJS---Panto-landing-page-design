import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Shop from "./pages/shop/Shop.jsx";
import About from "./pages/about/About.jsx";
import Contact from "./pages/contact/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path:'/',
        element: <Home/>,
      },
      {
        path:'/shop',
        element: <Shop/>,
      },
      {
        path:'/about-us',
        element: <About/>,
      },
      {
        path:'/contact',
        element:<Contact/>,
      },
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
