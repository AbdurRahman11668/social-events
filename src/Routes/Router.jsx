import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home/Home";
import CardDetails from "../Pages/CardDetails/CardDetails";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import News from "../Pages/News/News";
import EventsAndParties from "../Pages/EventsAndParties/EventsAndParties";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/card/:id",
        element: (
          <PrivateRoute>
            <CardDetails></CardDetails>
          </PrivateRoute>
        ),
        loader: () => fetch('/categories.json')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/news",
        element: <PrivateRoute><News></News></PrivateRoute>
      },
      {
        path: "/eventsandparties",
        element: <PrivateRoute><EventsAndParties></EventsAndParties></PrivateRoute>
      },
    ],
  },
]);

export default router;

