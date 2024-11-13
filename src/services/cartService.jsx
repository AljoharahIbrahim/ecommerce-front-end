import axios from "axios";

const orderUrl =
  "https://sda-3-onsite-backend-teamwork-py8b.onrender.com/api/v1/orders";
const localURL = "http://localhost:5125/api/v1/orders";

// POST
export const createAnewOrder = async (orderItems, methodType, userToken) => {
  const data = { orderItems: orderItems, method: methodType };
  // console.log("order details cartService ", data);
  const response = await axios.post(`${orderUrl}`, data, {
    headers: { Authorization: `Bearer ${userToken}` },
  });
  console.log("response", response);
  return response;
};

// UPDATA
