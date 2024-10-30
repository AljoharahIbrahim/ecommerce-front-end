import axios from "axios";
// use axios to function that connect with api to get products data 
export const getAllProducts = async () => {
  const response = await axios.get(
    "https://sda-3-onsite-backend-teamwork-py8b.onrender.com/api/v1/products"
  );
  return response.data;
};
