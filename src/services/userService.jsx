import axios from "axios";
// post User = > login endpoint
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

// Post user => register endpoint
export const register = async (UserName, Email, Password, Address, phoneNumber) => {

  const userData = {
    UserName: UserName,
    Email: Email,
    Password: Password,
    Address: Address,
    phoneNumber: phoneNumber,
  };
  console.log("!!!from register connect api ...");
  console.log("userData =>", userData);

  if (userData) {
    const response = await axios.post(
      "https://sda-3-onsite-backend-teamwork-py8b.onrender.com/api/v1/users/register",
      userData
    );
    console.log("**call register api : ");
    console.log(response.data);
    return response.data;
  }
};

// Get User/id = > getUserById endpoint 
export const getUserById = async (userID,token) => {
  console.log("userID=", userID);
  const userUrl ="https://sda-3-onsite-backend-teamwork-py8b.onrender.com/api/v1/users";
  const response = await axios.get(`${userUrl}/${userID}`,{headers:{Authorization:`Bearer ${token}`}});
  console.log(response);
  return response.data;
};
