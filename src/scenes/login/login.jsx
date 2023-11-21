import React, { useState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { ColorModeContext, useMode } from "../../theme";
import { ThemeProvider } from "@emotion/react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [theme, colorMode] = useMode();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "admin", // Default role, you can change it as needed
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...formErrors };

    // Validate email
    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    } else {
      newErrors.email = "";
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
      valid = false;
    } else {
      newErrors.password = "";
    }

    setFormErrors(newErrors);
    return valid;
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Form is valid, proceed with form submission
      console.log({
        email: formData.email,
        password: formData.password,
        role: formData.role,
      });
      // Add login logic here

      // Redirect to a different page based on the selected role
      const redirectPath = formData.role === "admin" ? "/admin" : "/employee";
      navigate(redirectPath, { repalce: true });
    } else {
      // Form is not valid, handle accordingly
      console.error("Form submission failed. Please check the errors.");
    }
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=2456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
            sx={{ bgcolor: "#141b2d" }}
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleLogin}
                sx={{ mt: 1 }}
              >
                <TextField
                  color="secondary"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={formData.email}
                  onChange={handleInputChange}
                  error={Boolean(formErrors.email)}
                  helperText={formErrors.email}
                />
                <TextField
                  color="secondary"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleInputChange}
                  error={Boolean(formErrors.password)}
                  helperText={formErrors.password}
                />
                <FormControl fullWidth sx={{ mt: 2 }}>
                  <InputLabel id="role-label" color="secondary">
                    Role
                  </InputLabel>
                  <Select
                    labelId="role-label"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    label="Role"
                    color="secondary"
                  >
                    <MenuItem value="admin">Admin</MenuItem>
                    <MenuItem value="employee">Employee</MenuItem>
                  </Select>
                </FormControl>

                <FormControlLabel
                  control={<Checkbox value="remember" color="secondary" />}
                  label="Remember me"
                />
                <Button
                  color="secondary"
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Login
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2" color="secondary">
                      Forgot password?
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
