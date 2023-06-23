import Contacto from "../components/Contacto";
import Home from "../components/Home";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contacto",
    element: <Contacto />,
  },
];

export default routes;
