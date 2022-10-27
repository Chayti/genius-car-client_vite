import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Login from "../../Pages/Authentication/Login";
import Registration from "../../Pages/Authentication/Registration";
import Cart from "../../Pages/Cart/Cart";
import Checkout from "../../Pages/CheckOut/Checkout";
import Home from "../../Pages/Home/Home";
import ServiceArea from "../../Pages/Home/ServiceArea/ServiceArea";
import SingleService from "../../Pages/SingleService/SingleService/SingleService";
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
        path: "/service",
        element: <ServiceArea></ServiceArea>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/checkout/:id",
        element: <PrivateRoute><Checkout/></PrivateRoute>,
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
        loader: ({params}) =>
          fetch(
            `http://localhost:5000/service/${params.id}`
          ),
        element: <SingleService></SingleService>,
      },
      {
        path: "/myOrders",
        element: <PrivateRoute><Cart/></PrivateRoute>,
      },
    ],
  },
]);
