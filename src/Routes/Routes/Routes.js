import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home";
import SingleService from "../../Pages/SingleService/SingleService/SingleService";
import Login from "../../Pages/Login/Login";
import Registration from "../../Pages/Registration/Registration";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/single-service",
        loader: () =>
          fetch(
            "https://raw.githubusercontent.com/Chayti/Genius-Car-B-6/main/public/Data/allServices.json"
          ),
        element: <SingleService></SingleService>,
      },
    ],
  },
]);
