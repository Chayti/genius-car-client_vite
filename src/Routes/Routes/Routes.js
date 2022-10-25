import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import SingleService from "../../Pages/SingleService/SingleService/SingleService";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/single-service",
        // loader: ({ params }) =>
        //   fetch(
        //     `https://raw.githubusercontent.com/Chayti/Genius-Car-B-6/main/public/Data/allServices.json/${params.id}`
        //   ),
        element: <SingleService></SingleService>,
      },
    ],
  },
]);
