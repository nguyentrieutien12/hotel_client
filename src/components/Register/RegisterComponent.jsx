import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { InputLabel, MenuItem, Select } from "@mui/material";
import { Link as L } from "react-router-dom";
import styles from "./../Login/LoginComponent.module.css";
const theme = createTheme();
 function RegisterComponent(props) {
  const { accountRegister } = props;
  const { username, address, sex, password, comfirmPassword, email } =
    accountRegister;
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit();
  };
  const handleChange = (e) => {
    props.handleChange(e);
  };
  return (
    <div className={styles.form_register_login}>
      <ThemeProvider theme={theme}>
        {" "}
        <Container
          className={styles.form_container}
          component="main"
          maxWidth="xs"
        >
          <CssBaseline />
          <div className={styles.form}>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    fullWidth
                    id="username"
                    label="Enter Username"
                    name="username"
                    onChange={handleChange}
                    value={username}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Enter Email"
                    name="email"
                    onChange={handleChange}
                    value={email}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Enter Address"
                    name="address"
                    value={address}
                    onChange={handleChange}
                  />
                </Grid>
                {/* SEX */}
                <Grid item xs={6}>
                  <InputLabel id="demo-simple-select-label">Sex</InputLabel>
                  <Select
                    fullWidth
                    label="sex"
                    name="sex"
                    onChange={handleChange}
                    value={sex}
                  >
                    <MenuItem defaultChecked value={"male"}>
                      Male
                    </MenuItem>
                    <MenuItem value={"female"}>FeMale</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Enter Password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    fullWidth
                    label="Enter ComfirmPassword"
                    name="comfirmPassword"
                    onChange={handleChange}
                    value={comfirmPassword}
                    type="password"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
            </Box>
            <Grid container>
              <Grid item>
                <L to="/login" variant="body2">
                  {"You have an account? Sign In"}
                </L>
              </Grid>
            </Grid>
          </div>
        </Container>
      </ThemeProvider>
    </div>
  );
}
export default React.memo(RegisterComponent);