import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../layouts/MainLayout";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
