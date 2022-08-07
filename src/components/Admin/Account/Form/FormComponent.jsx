import React, { useContext } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { InputLabel, MenuItem, Select } from "@mui/material";
import { ObjContext } from "../../../../containers/Admin/Account/AccountContainerAdmin";

const theme = createTheme();
export default function FormComponent() {
  const obj = useContext(ObjContext);
  const { username, email, password, comfirmPassword, address, sex, role } =
    obj.accountRegister;
  const handleSubmit = (e) => {
    e.preventDefault();
    obj.handleSubmit();
  };
  const handleChange = (e) => {
    obj.handleChange(e);
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container component="main">
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
                    required
                    fullWidth
                    id="username"
                    label="Enter Username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    onChange={handleChange}
                    value={username}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Enter Email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={handleChange}
                    value={email}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="address"
                    label="Enter Address"
                    name="address"
                    autoComplete="address"
                    autoFocus
                    onChange={handleChange}
                    value={address}
                  />
                </Grid>
                {/* SEX */}
                <Grid item xs={6}>
                  <InputLabel id="demo-simple-select-label">Sex</InputLabel>
                  <Select
                    fullWidth
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
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
                {/* ROLE */}
                <Grid item xs={6}>
                  <InputLabel id="demo-simple-select-label">Role</InputLabel>
                  <Select
                    fullWidth
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="role"
                    name="role"
                    onChange={handleChange}
                    value={role}
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
                    required
                    fullWidth
                    id="password"
                    label="Enter Password"
                    name="password"
                    autoComplete="password"
                    type="password"
                    autoFocus
                    onChange={handleChange}
                    value={password}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="comfirmPassword"
                    label="Enter ComfirmPassword"
                    name="comfirmPassword"
                    autoComplete="comfirmPassword"
                    autoFocus
                    onChange={handleChange}
                    type="password"
                    value={comfirmPassword}
                  />
                </Grid>
              </Grid>
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
                Sign Up
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
