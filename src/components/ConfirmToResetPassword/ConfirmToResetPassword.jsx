import styles from "./../Login/LoginComponent.module.css";
import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useAlert } from "react-alert";
const theme = createTheme();
export default function ConfirmToResetPassword() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const email = searchParams.get("email");
  const token = searchParams.get("token");
  const [account, setAccount] = useState({
    password: "",
    comfirmPassword: "",
  });
  const alert = useAlert();
  useEffect(() => {
    try {
      axios
        .get(
          `${
            import.meta.env.VITE_BACKEND_SITE
          }/accounts/auth-token-reset_password/${token}`
        )
        .then((res) => res.data)
        .then((d) => {
          const { statusCode } = d;
          if (statusCode !== 202) {
            return navigate("/reset-password");
          }
        });
    } catch (error) {}
  }, []);
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      account.email = email;
      const result = await axios.post(
        `${import.meta.env.VITE_BACKEND_SITE}/accounts/reset-password`,
        account
      );
      const { message, statusCode } = result.data;
      if (statusCode === 202) {
        alert.success(message);
        return navigate("/login");
      }
      return alert.error(message);
    } catch (error) {
      console.log(error);
      const { message } = error.response.data;
      alert.error(message[0]);
    }
  };
  const handleResetPassword = (e) => {
    const { name, value } = e.target;
    setAccount((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  return (
    <div
      className={styles.form_register_login}
      style={{ backgroundImage: "url(/fg.jpg)" }}
    >
      <ThemeProvider theme={theme}>
        <Container
          className={styles.form_container}
          component="main"
          maxWidth="xs"
        >
          <CssBaseline />
          <div className={styles.form}>
            <Typography component="h1" variant="h5">
              Confirm Password
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                autoComplete="password"
                autoFocus
                onChange={handleResetPassword}
                type="password"
                value={account.password}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="confirm_passowrd"
                label="Confirm Password"
                name="comfirmPassword"
                autoComplete="confirm_passowrd"
                autoFocus
                onChange={handleResetPassword}
                type="password"
                value={account.comfirmPassword}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onSubmit={handleSubmit}
              >
                RESET PASSWORD
              </Button>
            </Box>
          </div>
        </Container>
      </ThemeProvider>
    </div>
  );
}
