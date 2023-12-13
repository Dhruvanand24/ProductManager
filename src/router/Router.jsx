import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import TotalOrders from "../pages/TotalOrders";
import NewStocks from "../pages/NewStocks";
import DeadStocks from "../pages/DeadStocks";
import TotalLeads from "../pages/TotalLeads";
import Logout from "../pages/Logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <TotalOrders />,
      },
      {
        path: "/newstocks",
        element: <NewStocks/>,
      },
      {
        path: "/deadstocks",
        element: <DeadStocks/>
      },
      {
        path: "/totalleads",
        element: <TotalLeads/>
      }
    ],
  },
  {
    path: "/logout",
    element: <Logout/>
  }
]);

export default router;