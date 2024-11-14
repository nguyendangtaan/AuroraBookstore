
import { ROUTERS } from "./ultils/router";
import Homepage from "./pages/users/homepage";
import Catalog from "./pages/users/Catalog";
import { Routes,Route } from "react-router-dom";
import MasterLayout from "./pages/users/theme/masterLayout";

const renderUserRouter=()=>{
    const useRouters=[
        {
            path: ROUTERS.USER.HOME,
            component :<Homepage/> 
        },
        {
            path: ROUTERS.USER.CATALOG,
            component :<Catalog/> 
        }
       
    ]
    return  (
        <MasterLayout>
        <Routes>
        {
            useRouters.map((item, key) => (
                    <Route key={key} path={item.path} element={item.component} />
                ))
        }
        </Routes>
        </MasterLayout>
    )
      
}
const RouterCustom=()=>{
    return renderUserRouter();

}
export default RouterCustom;