import { Form, Button } from "react-bootstrap";
import { useState } from 'react';

const SecuritySettings = ({ onUpdatePassword }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdatePassword = async () => {
    setIsLoading(true);
    setStatus(""); // Reset trạng thái trước khi bắt đầu cập nhật

    // Kiểm tra nếu mật khẩu mới và mật khẩu nhập lại không khớp
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setStatus("error");
      setIsLoading(false);
      setTimeout(() => setStatus(""), 3000);
      return;
    }

    try {
      await onUpdatePassword(passwordData); // Gọi hàm onUpdatePassword từ props, truyền dữ liệu mật khẩu
      setStatus("success"); // Cập nhật trạng thái khi thành công
    } catch (error) {
      setStatus("error"); // Cập nhật trạng thái khi có lỗi
    } finally {
      setTimeout(() => setIsLoading(false), 2500); // Dừng hiệu ứng loading sau 2.5s
      setTimeout(() => setStatus(""), 3000); // Reset trạng thái sau 3s
    }
  };

  return (
    <div>
      <h5 className="text-gray-600 mb-3">Security</h5>
      <Form.Group controlId="oldPassword" className="mb-3">
        <Form.Label>Old Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter old password"
          name="oldPassword"
          value={passwordData.oldPassword}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="newPassword" className="mb-3">
        <Form.Label>New Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter new password"
          name="newPassword"
          value={passwordData.newPassword}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="confirmPassword" className="mb-3">
        <Form.Label>Confirm New Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm new password"
          name="confirmPassword"
          value={passwordData.confirmPassword}
          onChange={handleChange}
        />
      </Form.Group>

      <Button 
        onClick={handleUpdatePassword} // Sử dụng hàm handleUpdatePassword
        variant="primary" 
        className={`w-full mt-3 bg-gradient-to-r from-[#942446] to-[#9c2f5b] hover:from-[#942446] hover:to-[#9c2f5b] text-white py-2 px-4 rounded-lg transform transition duration-200 hover:scale-105 active:scale-95 shadow-lg
          ${isLoading ? "bg-gray-500 cursor-not-allowed" : ""} 
          ${status === "success" ? "bg-green-500" : ""} 
          ${status === "error" ? "bg-red-500" : ""} 
        `}
        disabled={isLoading} // Vô hiệu hóa button khi đang loading
      >
        {isLoading ? (
          <div className="flex items-center">
            <svg
              className="animate-spin h-5 w-5 mr-2 text-white"
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
            Updating...
          </div>
        ) : status === "success" ? (
          "Updated Successfully"
        ) : status === "error" ? (
          "Error Updating"
        ) : (
          "Update"
        )}
      </Button>
    </div>
  );
};

export default SecuritySettings;
