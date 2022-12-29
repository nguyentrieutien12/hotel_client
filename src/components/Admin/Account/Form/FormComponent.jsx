import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { InputLabel, MenuItem, Select } from "@mui/material";
const theme = createTheme();
export default function FormComponent(props) {
  const { accountRegister, isUpdate } = props;
  const {
    username,
    email,
    password,
    comfirmPassword,
    address,
    sex,
    role,
    phone_number,
  } = accountRegister;

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit();
  };
  const handleChange = (e) => {
    props.handleChange(e);
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container component="main">
          <h5>
            {" "}
            {props.isUpdate ? "UPDATE ACCOUNT FORM" : "CREATE ACCOUNT FORM"}
          </h5>
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
                  label="Enter Username"
                  name="username"
                  onChange={handleChange}
                  value={username || ""}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  margin="normal"
                  fullWidth
                  label="Enter Email"
                  name="email"
                  onChange={handleChange}
                  value={email || ""}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  margin="normal"
                  fullWidth
                  label="Enter Address"
                  name="address"
                  onChange={handleChange}
                  value={address || ""}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  margin="normal"
                  fullWidth
                  label="Enter Phone Number"
                  name="phone_number"
                  onChange={handleChange}
                  value={phone_number || ""}
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
                  value={sex || "female"}
                >
                  <MenuItem defaultChecked value={"male"}>
                    Male
                  </MenuItem>
                  <MenuItem value={"female"}>FeMale</MenuItem>
                </Select>
              </Grid>
              {/* ROLE */}
              <Grid item xs={6}>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                  fullWidth
                  label="role"
                  name="role"
                  onChange={handleChange}
                  value={role || 2}
                >
                  <MenuItem defaultChecked value={1}>
                    ADMIN
                  </MenuItem>
                  <MenuItem value={2}>CUSTOMER</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  margin="normal"
                  fullWidth
                  label="Enter Password"
                  name="password"
                  type="password"
                  onChange={handleChange}
                  value={password || ""}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  margin="normal"
                  fullWidth
                  label="Enter ComfirmPassword"
                  name="comfirmPassword"
                  autoComplete="comfirmPassword"
                  onChange={handleChange}
                  type="password"
                  value={comfirmPassword || ""}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ background: isUpdate ? "#dc3545" : "#04aa6d" }}
            >
              {isUpdate ? "UPDATE ACCOUNT" : "CREATE ACCOUNT"}
            </Button>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
