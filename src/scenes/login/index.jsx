import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { ColorModeContext, useMode } from "../../theme";
import { ThemeProvider } from "@emotion/react";

export default function SignInSide() {
  const navigate = useNavigate();
  const [theme, colorMode] = useMode();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    } else {
      newErrors.email = "";
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else {
      newErrors.password = "";
    }

    setFormErrors(newErrors);
    return valid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Form is valid, proceed with form submission
      console.log({
        email: formData.email,
        password: formData.password,
      });

      // Redirect to a different page using React Router
      navigate("/admin/dashboard");
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
                onSubmit={handleSubmit}
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
