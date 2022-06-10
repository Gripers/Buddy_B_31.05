import Home from "./pages/Home";
import Filials from "./pages/Filials";
import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";
import FilialOneInner from "./filial-components/FilialOneInner";
import FilialTwoInner from "./filial-components/FilialTwoInner";
import PutPatch from "./PutPatch";
import UserInfo from "./pages/UserInfo";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/filials",
    element: <Filials />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/filialone",
    element: <FilialOneInner />,
  },
  {
    path: "/filialtwo",
    element: <FilialTwoInner />,
  },
  {
    path: "/patcher",
    element: <PutPatch />,
  },
  {
    path: "/userinfo",
    element: <UserInfo />,
  },
];

export default routes;
