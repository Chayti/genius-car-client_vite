import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AllServices from "../../Pages/AllServices/AllServices";
import Login from "../../Pages/Authentication/Login";
import Registration from "../../Pages/Authentication/Registration";
import Cart from "../../Pages/Cart/Cart";
import Checkout from "../../Pages/CheckOut/Checkout";
import Home from "../../Pages/Home/Home";
import ManageServices from "../../Pages/ManageServices/ManageServices";
import ServiceDetails from "../../Pages/SingleService/ServiceDetails/ServiceDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


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
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/services",
        loader: () => fetch("http://localhost:5000/services"),
        element: <AllServices></AllServices>,
      },
      {
        path: "/checkout/:id",
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/service/${params.id}`
          ),
        element: <PrivateRoute><Checkout /></PrivateRoute>,
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
        path: "/single-service/:id",
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/service/${params.id}`
          ),
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/myOrders",
        element: <PrivateRoute><Cart /></PrivateRoute>,
      },
      {
        path: "/manageService",
        element: <PrivateRoute><ManageServices /></PrivateRoute>,
      },
    ],
  },
]);
