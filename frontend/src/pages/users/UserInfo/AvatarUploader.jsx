import { useState } from "react";
import axios from "axios";

const AvatarUploader = ({ currentAvatar, onUploadSuccess }) => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "unsigned"); 
    formData.append("cloud_name", "dxggv6rnr"); 

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dxggv6rnr/image/upload",
        formData
      );

      const avatarUrl = response.data.secure_url;
      onUploadSuccess(avatarUrl); // Callback to update avatar URL
      setUploading(false);
    } catch (err) {
      setError("Upload failed. Please try again.");
      setUploading(false);
    }
  };

  return (
    <div className="avatar-uploader">
      <img
        src={currentAvatar || "https://via.placeholder.com/150"}
        alt="Current avatar"
        className="rounded-circle mb-3"
        style={{ width: "150px", height: "150px", objectFit: "cover" }}
      />
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {uploading && <p>Uploading...</p>}
      {error && <p className="text-danger">{error}</p>}
    </div>
  );
};

export default AvatarUploader;
