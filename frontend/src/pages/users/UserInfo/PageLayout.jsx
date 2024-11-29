import { Routes, Route, Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar";
import AccountForm from "./AccountForm";
import ContactInfo from "./ContactForm";
import SecuritySettings from "./SecuritySetting";
import { useState } from "react";
import OrderSession from "./OrderSession";

const AccountPage = () => {
  const [userData, setUserData] = useState({
    avatar: "https://png.pngtree.com/png-clipart/20190903/original/pngtree-worried-and-doubtful-person-png-image_4429949.jpg",
    fullName: "Nguyễn Văn An",
    username: "nguyenvanan",
    birthday: { date: "1", month: "January", year: "1990" },
    gender: "Male",
    address: "123 Đường ABC",
    phone: "0987654321",
    email: "hihi@gmail.com",
    province: "nha tu hoang dao",
    city: "HO CHI MINH"
  });

  const handleSave = (formData) => {
    setUserData((prevData) => ({
      ...prevData,
      ...formData,
      birthday: { ...prevData.birthday, ...formData.birthday },
    }));
  };

  const handleUpdate = (type) => {
    if (type === "password") {
      alert("Password updated!");
    } else {
      alert(`${type} updated!`);
    }
  };

  const handleUpdatePassword = async () => {
    try {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("Password updated successfully!");
        }, 2000);
      });
    } catch (error) {
      throw new Error("Error updating password");
    }
  };

  return (
    <Container fluid className="p-4 bg-gray-100 min-h-screen">
      <Row>
        <Col md={3} className="mb-4">
          <Sidebar userName={userData.fullName} avatar={userData.avatar} />
        </Col>
        <Col md={9}>
          <Routes>
            <Route path="/" element={<Outlet />}>
              <Route
                path="account"
                element={
                  <div className="bg-white shadow-sm rounded-md p-4">
                    <h4 className="text-gray-700 text-3xl mb-4">Account Information</h4>
                    <Row>
                      <Col md={9}>
                        <div className="bg-gray-50 border border-gray-200 rounded-md p-4 shadow-sm mb-4">
                          <label
                            htmlFor="user-information"
                            className="text-gray-600 font-medium block mb-3"
                          >
                            User Information
                          </label>
                          <AccountForm userData={userData} onSave={handleSave} />
                        </div>
                      </Col>
                      <Col md={3}>
                        <div className="bg-white border border-gray-200 rounded-md shadow-sm p-3 mb-3">
                          <ContactInfo
                            phone={userData.phone}
                            email={userData.email}
                            onUpdate={handleUpdate}
                          />
                        </div>
                        <div className="bg-white border border-gray-200 rounded-md shadow-sm p-3">
                          <SecuritySettings onUpdatePassword={handleUpdatePassword} />
                        </div>
                      </Col>
                    </Row>
                  </div>
                }
              />
              <Route
                path="orders"
                element={
                  <div className="bg-white shadow-sm rounded-md p-4">
                    <h4 className="text-gray-700 text-3xl mb-4">Order Management</h4>
                    <OrderSession />
                  </div>
                }
              />
              <Route path="*" element={<div>404 - Page not found</div>} />
            </Route>
          </Routes>
        </Col>
      </Row>
    </Container>
  );
};

export default AccountPage;
