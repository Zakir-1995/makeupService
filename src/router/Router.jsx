import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Services from "../pages/Services";
import Booking from "../pages/Booking";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/booking",
        element: <Booking />,
      },
 
    ],
  },
]);

export default router;
