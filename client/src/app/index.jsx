import { RouterProvider } from "react-router-dom";
import { router } from "./providers/router";
import "./styles/global.css";

export const App = () => {
  return <RouterProvider router={router} />;
};
