import { useState } from "react";
import { Button } from "react-bootstrap";

const SaveButton = ({ onClick }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(""); // "success", "error", ""

  const handleClick = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(""); // Reset trạng thái khi nhấn nút

    try {
      await onClick(); // Gọi hàm xử lý từ component cha
      setStatus("success"); // Đặt trạng thái là thành công
    } catch (error) {
      setStatus("error"); // Đặt trạng thái là lỗi
    } finally {
      setIsLoading(false); // Kết thúc loading
    }
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
          Saving...
        </div>
      ) : status === "success" ? (
        "Saved Successfully"
      ) : status === "error" ? (
        "Error Saving"
      ) : (
        "Save Changes"
      )}
    </button>
  );
};

export default SaveButton;
