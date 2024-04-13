import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../layouts/MainLayout";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import ProjectDetails from "../Pages/ProjectDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Error from "../components/Error";
import UpdateProfile from "../Pages/UpdateProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
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
        element: (
          <PrivateRoute>
            <ProjectDetails></ProjectDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/data/projects.json"),
      },
      {
        path: '/updateprofile',
        element: <UpdateProfile></UpdateProfile>
      }
    ],
  },
]);
