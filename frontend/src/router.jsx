import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import MasterLayout from "./pages/users/theme/masterLayout";
import Homepage from "./pages/users/homepage";
import Catalog from "./pages/users/Catalog";
import LoginSignup from "./pages/users/LoginAndSignup/LoginSignup";
import { ROUTERS } from "./ultils/router";

const renderUserRouter = () => {
  const useRouters = [
    {
      path: ROUTERS.USER.HOME,
      component: <Homepage />,
    },
    {
      path: ROUTERS.USER.CATALOG,
      component: <Catalog />,
    },
  ];

  return (
    <Routes>
      <Route path={ROUTERS.USER.LOGIN} element={<LoginSignup />} />
      <Route
        path="*"
        element={
          <MasterLayout>
            <Routes>
              {useRouters.map((item, key) => (
                <Route key={key} path={item.path} element={item.component} />
              ))}
            </Routes>
          </MasterLayout>
        }
      />
    </Routes>
  );
};

const RouterCustom = () => {
  return renderUserRouter();
};

export default RouterCustom;
