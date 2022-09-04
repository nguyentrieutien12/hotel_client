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
                  value={address}
                  onChange={handleChange}
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
                  value={password}
                  onChange={handleChange}
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
  );
}
