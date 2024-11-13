// using material ui
import React, { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContextData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate, useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Grid,
  Typography,
  Container,
} from "@mui/material";

export default function RegisterForm() {
  const navigate = useNavigate();
  const {
    registerUser,
    setRegisterUser,
    createUser,
    setCreateUser,
    responeSuccessRegister,
    setResponeSuccessRegister,
  } = useContext(UserContext);

  const handelOnSubmit = (event) => {
    event.preventDefault();
    setRegisterUser({
      ...registerUser,
      UserName: registerUser.UserName,
      Email: registerUser.Email,
      Password: registerUser.Password,
      Address: registerUser.Address,
      PhoneNumber: registerUser.PhoneNumber,
    });
    setCreateUser(true);
  };

  useEffect(() => {
    if (responeSuccessRegister) {
      setResponeSuccessRegister(false);
      toast.success("User is created");
      setRegisterUser({
        ...registerUser,
        UserName: "",
        Email: "",
        Password: "",
        Address: "",
        PhoneNumber: "",
      });
      navigate("/login");
    }
  }, [responeSuccessRegister]);

  return (
    <Container maxWidth="sm">
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 2, padding: 3 }}
      >
        <Typography variant="h4" gutterBottom>
          Register
        </Typography>
        <form onSubmit={handelOnSubmit}>
          {/* User Name */}
          <TextField
            label="User Name"
            variant="outlined"
            fullWidth
            value={registerUser.UserName}
            onChange={(event) =>
              setRegisterUser({ ...registerUser, UserName: event.target.value })
            }
            required
            margin="normal"
          />

          {/* Email */}
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            value={registerUser.Email}
            onChange={(event) =>
              setRegisterUser({ ...registerUser, Email: event.target.value })
            }
            required
            margin="normal"
          />

          {/* Password */}
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={registerUser.Password}
            onChange={(event) =>
              setRegisterUser({ ...registerUser, Password: event.target.value })
            }
            required
            margin="normal"
          />

          {/* Address */}
          <TextField
            label="Address"
            variant="outlined"
            fullWidth
            value={registerUser.Address}
            onChange={(event) =>
              setRegisterUser({ ...registerUser, Address: event.target.value })
            }
            required
            margin="normal"
          />

          {/* Phone Number */}
          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            value={registerUser.PhoneNumber}
            onChange={(event) =>
              setRegisterUser({
                ...registerUser,
                PhoneNumber: event.target.value,
              })
            }
            required
            margin="normal"
          />

          {/* Register Button */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Register
          </Button>
        </form>
        <ToastContainer />
      </Box>
    </Container>
  );
}
