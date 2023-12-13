import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";

import Logout from "../pages/Logout";
import TotalData from "../pages/TotalData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <TotalData />,
      }
      
    ],
  },
  {
    path: "/logout",
    element: <Logout/>
  }
]);

export default router;