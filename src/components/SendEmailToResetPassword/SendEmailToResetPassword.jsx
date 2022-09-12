import styles from "./../Login/LoginComponent.module.css";
import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
const theme = createTheme();
export default function SendEmailToResetPassword() {
  const [email, setEmail] = useState("");
  const alert = useAlert();
  const handleChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };
  const handleSendEmail = async (e) => {
    try {
      e.preventDefault();
      const result = await axios.post(
        `${import.meta.env.VITE_BACKEND_SITE}/accounts/send-email`,
        { email }
      );
      const { message, statusCode } = result.data;
      if (statusCode === 201) {
        setEmail("");
        return alert.success(message);
      }
      alert.error(message);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.form_register_login}>
      <ThemeProvider theme={theme}>
        <Container
          className={styles.form_container}
          component="main"
          maxWidth="xs"
        >
          <CssBaseline />
          <div className={styles.form}>
            <Typography component="h1" variant="h5">
              Reset Password
            </Typography>
            <Box component="form" onSubmit={handleSendEmail} noValidate>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleChange}
                value={email}
              />
              <Button
                onClick={handleSendEmail}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                SEND EMAIL
              </Button>
            </Box>
          </div>
        </Container>
      </ThemeProvider>
    </div>
  );
}
