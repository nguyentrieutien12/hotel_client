import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styles from "./LoginComponent.module.css";
import { Link as L } from "react-router-dom";
const theme = createTheme();
function LoginComponent(props) {
  const { accountLogin } = props;
  const { email, password } = accountLogin;
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit();
  };
  const handleChange = (e) => {
    props.handleChange(e);
  };

  return (
    <div
      style={{ backgroundImage: "url(/hotel.webp)" }}
      className={styles.form_register_login}
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
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate>
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
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
                value={password}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <L to="/reset-password" variant="body2">
                    Forgot password?
                  </L>
                </Grid>
                <Grid item>
                  <L to="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </L>
                </Grid>
              </Grid>
            </Box>
          </div>
        </Container>
      </ThemeProvider>
    </div>
  );
}
export default React.memo(LoginComponent);
