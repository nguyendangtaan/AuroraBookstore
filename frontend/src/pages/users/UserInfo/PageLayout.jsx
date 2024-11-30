import { Routes, Route, Outlet } from "react-router-dom";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import Sidebar from "./Sidebar";
import AccountForm from "./AccountForm";
import ContactInfo from "./ContactForm";
import SecuritySettings from "./SecuritySetting";
import { useCallback, useState, useEffect } from "react";
import OrderSession from "./OrderSession";
import axios from "axios";

const AccountPage = () => {
  const [userData, setUserData] = useState({
    avatar: "",
    full_name: "",
    username: "",
    birthday: { date: "", month: "", year: "" },
    gender: "",
    address: "",
    phone: "",
    email: "",
    province: "",
    city: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user data from the server
  const fetchUserData = useCallback(async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/user-info/1");
      const data = response.data;

      // Parse birthday if it's a string
      const birthday = typeof data.birthday === "string" ? parseBirthday(data.birthday) : data.birthday;
      setUserData({ ...data, birthday });
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch user data. Please try again later.");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  // Helper function to parse birthday
  const parseBirthday = (birthdayStr) => {
    const [year, month, date] = birthdayStr.split("-").map((part) => parseInt(part, 10));
    return { year, month, date };
  };

  const handleSave = async (formData) => {
    try {
      const updatedData = {
        ...userData,
        ...formData,
        birthday: `${formData.birthday.year}-${formData.birthday.month.toString().padStart(2, "0")}-${formData.birthday.date.toString().padStart(2, "0")}`,
      };
  
      console.log("Updated data:", updatedData);
      const response = await axios.patch("http://127.0.0.1:8000/api/user-info/1", updatedData);
      setUserData(response.data);
    } catch (err) {
      console.error("Error:", err.response ? err.response.data : err.message);
    }
  };
  

  // Update specific settings
  const handleUpdate = async (type) => {
    try {
      if (type === "password") {
        const response = await axios.post(`http://127.0.0.1:8000/api/user-info/1/update-password`, { password: "newPassword" });
      } else {
      }
    } catch (err) {
      console.error("Error updating data:", err);
    }
  };

  // Update password directly
  const handleUpdatePassword = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/user-info/1/update-password", { password: "newPassword" });
    } catch (err) {
      console.error("Error updating password:", err);
    }
  };

  if (loading) {
    return (
      <Container fluid className="p-4 bg-gray-100 min-h-screen">
        <Spinner animation="border" role="status" className="mx-auto d-block">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container fluid className="p-4 bg-gray-100 min-h-screen">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container fluid className="p-4 bg-gray-100 min-h-screen">
      <Row>
        <Col md={3} className="mb-4">
          <Sidebar userName={userData.full_name} avatar={userData.avatar} />
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
