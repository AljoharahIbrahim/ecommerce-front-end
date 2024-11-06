import axios from "axios";

export const login = async (email, password) => {
  const userData = {
    email: email,
    password: password,
  };
  console.log("from login connect api ...");
  console.log("userData", userData);

  if (userData) {
    const response = await axios.post(
      "https://sda-3-onsite-backend-teamwork-py8b.onrender.com/api/v1/users/login",
      userData
    );
    console.log("**call login api : ");
    console.log(response.data);
    return response.data;
  }
};

export const getUserById = async (userID,token) => {
  console.log("userID=", userID);
  const userUrl ="https://sda-3-onsite-backend-teamwork-py8b.onrender.com/api/v1/users";
  const response = await axios.get(`${userUrl}/${userID}`,{headers:{Authorization:`Bearer ${token}`}});
  console.log(response);
  return response.data;
};
