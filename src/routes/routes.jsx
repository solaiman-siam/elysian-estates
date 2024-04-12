import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../layouts/MainLayout";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import ProjectDetails from "../Pages/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data/projects.json"),
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
      {
        path: "/projectdetails/:id",
        element: <ProjectDetails></ProjectDetails>,
        loader: () => fetch("/data/projects.json"),
      },
    ],
  },
]);
