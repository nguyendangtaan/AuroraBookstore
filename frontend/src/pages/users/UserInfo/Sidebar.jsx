import { FaUserAlt } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import "./userinfo.css";

const Sidebar = ({ userName, avatar }) => {
  const location = useLocation();

  const menuItems = [
    { path: "/user/account", label: "My Account", icon: <FaUserAlt /> },
    { path: "/user/orders", label: "Order Management", icon: <MdProductionQuantityLimits /> },
  ];

  return (
    <div className="bg-white shadow-sm rounded-md p-3">
      {/* Avatar và thông tin tài khoản */}
      <div className="flex items-center mb-8">
        <img
          src={avatar}
          alt="avatar"
          className="rounded-full w-20 h-20 border-4 border-[#FF9855] shadow-lg"
        />
        <div className="ml-4">
          <h5 className="text-lg font-bold text-yellow-500">Xin chào</h5>
          <h5 className="text-3xl font-bold">{userName}</h5>
        </div>
      </div>

      {/* Menu */}
      <div className="space-y-3">
        {menuItems.map(({ path, label, icon }) => (
          <Link
            to={path}
            key={path}
            className={`flex items-center w-full px-4 py-3 rounded-lg hover:bg-purple-100 transition shadow-sm ${
              location.pathname.startsWith(path)
                ? "bg-purple-50 text-[#942446]"
                : "bg-gray-50 text-gray-700"
            }`}
          >
            {icon}
            <span className="ml-3 font-semibold">{label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
