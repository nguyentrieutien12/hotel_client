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
const theme = createTheme();

export default function RegisterComponent(props) {
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
    <div className="form_register_login">
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="sm">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
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
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
