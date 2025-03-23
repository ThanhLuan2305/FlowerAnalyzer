import axios from "axios";

const API_URL = "http://192.168.1.7:8000/api/predict/";

export const predictFlower = async (imageUri) => {
  const formData = new FormData();
  formData.append("image", {
    uri: imageUri,
    type: "image/jpeg",
    name: "upload.jpg",
  });

  try {
    const response = await axios.post(API_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Lỗi khi gửi ảnh:", error.response?.data || error.message);
    return null;
  }
};
