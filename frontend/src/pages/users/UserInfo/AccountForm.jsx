import { Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import "./userinfo.css";

const AccountForm = ({ userData, onSave }) => {
  const [gender, setGender] = useState(userData.gender || "Male");
  const [avatarPreview, setAvatarPreview] = useState(userData.avatar);
  const [avatarFile, setAvatarFile] = useState(null); // Lưu file ảnh
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(""); // "success", "error", ""
  const [errorMessage, setErrorMessage] = useState("");

  // Xử lý thay đổi file avatar
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      // Kiểm tra loại file
      if (!file.type.startsWith("image/")) {
        setErrorMessage("Please select a valid image file.");
        setAvatarPreview(null);
        setAvatarFile(null);
        return;
      }
  
      // Kiểm tra kích thước file (2MB)
      if (file.size > 2 * 1024 * 1024) {
        setErrorMessage("File size should not exceed 2MB.");
        setAvatarPreview(null);
        setAvatarFile(null);
        return;
      }
  
      setErrorMessage(""); // Xóa lỗi nếu file hợp lệ
  
      // Hiển thị preview trước
      const reader = new FileReader();
      reader.onload = () => setAvatarPreview(reader.result);
      reader.readAsDataURL(file);
  
      try {
        // Upload file lên dịch vụ lưu trữ
        const uploadData = new FormData();
        uploadData.append("file", file);
        const uploadResponse = await axios.post(
          "http://127.0.0.1:8000/api/upload-avatar", 
          uploadData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        setAvatarFile(uploadResponse.data.url); 
      } catch (uploadError) {
        console.error("Error uploading file:", uploadError);
        setErrorMessage("Error uploading avatar. Please try again.");
      }
    }
  };
  
  const getFormData = () => ({
    username: document.getElementById("username").value,
    full_name: document.getElementById("full_name").value,
    birthday: `${document.getElementById("birthday-year").value}-${document.getElementById("birthday-month").value}-${document.getElementById("birthday-date").value}`,
    gender,
    address: document.getElementById("address").value,
    province: document.getElementById("province").value,
    city: document.getElementById("city").value,
  });
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");
  
    const formData = getFormData();
    
    if (avatarFile) {
      formData.avatar = avatarFile;
    }
  
    try {
      const response = await axios.patch(
        `http://127.0.0.1:8000/api/user-info/${userData.id}`,
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
  
      setStatus("success");
      onSave && onSave(response.data);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setIsLoading(false);
      setTimeout(() => setStatus(""), 3000);
    }
  };
  
  const SaveButton = ({ isLoading, status }) => {
    const getButtonLabel = () => {
      if (isLoading) return "Saving...";
      if (status === "success") return "Saved Successfully";
      if (status === "error") return "Error Saving";
      return "Save Changes";
    };
  
    return (
      <button
        type="submit"
        disabled={isLoading}
        className={`mt-3 py-2 px-4 rounded-lg shadow-lg transform transition duration-200
          ${isLoading ? "bg-gray-500 cursor-not-allowed" : "bg-[#942446] hover:bg-[#9c2f5b]"}
          ${status === "success" ? "bg-green-500" : ""}
          ${status === "error" ? "bg-red-500" : ""}
          text-white`}
      >
        {isLoading ? (
          <svg
            className="animate-spin h-5 w-5 mr-2 text-white inline"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            ></path>
          </svg>
        ) : null}
        {getButtonLabel()}
      </button>
    );
  };
  
  return (
    <form className="p-4" onSubmit={handleSubmit}>
      <div className="d-flex mb-5">
        <div className="d-flex flex-column align-items-center me-5">
          <div className="position-relative mb-3">
            <img
              src={avatarPreview}
              alt="avatar"
              className="rounded-circle w-20 h-20 border-4 border-[#FF9855] shadow-md"
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
          </div>
          <input
            type="file"
            id="avatarInput"
            accept="image/*"
            onChange={handleFileChange}
            className="d-none"
          />
          <Button
            variant="secondary"
            className="px-4 py-2 bg-slate-300 text-gray-700 font-medium rounded-lg shadow-sm transition duration-300 hover:bg-slate-400 hover:shadow-lg hover:scale-105"
            onClick={() => document.getElementById("avatarInput").click()}
          >
            Choose File
          </Button>
        </div>
        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
      </div>

      <div className="form-fields">
        <Row>
          <Col>
            <Form.Group controlId="full_name" className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" id="full_name" defaultValue={userData.full_name} />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="username" className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" id="username" defaultValue={userData.username} />
            </Form.Group>
          </Col>
        </Row>
      </div>
      <Form.Group controlId="birthday" className="mb-4">
        <Form.Label className="text-gray-600">Birthday</Form.Label>
        <Row>
          <Col md={4}>
          <Form.Select
            id="birthday-date"
            defaultValue={userData.birthday?.date || ""}
            className="p-3 border rounded-lg shadow-md"
          >
            <option value="">Date</option>
            {Array.from({ length: 31 }, (_, i) => i + 1).map((date) => (
              <option key={date} value={date}>
                {date}
              </option>
            ))}
          </Form.Select>
          </Col>
          <Col md={4}>
            <Form.Select
              id="birthday-month"
              defaultValue={userData.birthday.month}
              className="p-3 border rounded-lg shadow-md"
            >
              <option value="">Month</option>
              {[
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ].map((month, index) => (
                <option key={index} value={index + 1}>
                  {month}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col md={4}>
            <Form.Select
              id="birthday-year"
              defaultValue={userData.birthday.year}
              className="p-3 border rounded-lg shadow-md"
            >
              <option value="">Year</option>
              {Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i).map(
                (year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                )
              )}
            </Form.Select>
          </Col>
        </Row>
      </Form.Group>

  {/* Gender Section */}
  <Form.Group controlId="gender" className="mb-4">
    <Form.Label className="text-gray-600">Gender</Form.Label>
    <div className="d-flex gap-4">
      <Form.Check
        type="radio"
        id="gender-male"
        label="Male"
        name="gender"
        value="Male"
        checked={gender === "Male"}
        onChange={(e) => setGender(e.target.value)}
        className="text-gray-600"
      />
      <Form.Check
        type="radio"
        id="gender-female"
        label="Female"
        name="gender"
        value="Female"
        checked={gender === "Female"}
        onChange={(e) => setGender(e.target.value)}
        className="text-gray-600"
      />
      <Form.Check
        type="radio"
        id="gender-other"
        label="Other"
        name="gender"
        value="Other"
        checked={gender === "Other"}
        onChange={(e) => setGender(e.target.value)}
        className="text-gray-600"
      />
    </div>
  </Form.Group>

  {/* Address Section */}
  <Form.Group controlId="address" className="mb-4">
    <Form.Label className="text-gray-600">Address</Form.Label>
    <Form.Control
      type="text"
      id="address"
      defaultValue={userData.address}
      className="p-3 border rounded-lg shadow-md"
    />
  </Form.Group>

  {/* Province and City Section */}
  <Row className="mb-3">
    <Col md={6}>
      <Form.Group controlId="province">
        <Form.Label className="text-gray-600">Province</Form.Label>
        <Form.Control
          type="text"
          id="province"
          defaultValue={userData.province}
          className="p-3 border rounded-lg shadow-md"
        />
      </Form.Group>
    </Col>
    <Col md={6}>
      <Form.Group controlId="city">
        <Form.Label className="text-gray-600">City</Form.Label>
        <Form.Control
          type="text"
          id="city"
          defaultValue={userData.city}
          className="p-3 border rounded-lg shadow-md"
        />
      </Form.Group>
    </Col>
  </Row>

      <div className="d-flex justify-content-center">
        <SaveButton isLoading={isLoading} status={status} />
      </div>
    </form>
  );
};

export default AccountForm;
