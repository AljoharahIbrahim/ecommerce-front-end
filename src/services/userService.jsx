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
