import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { InputLabel, MenuItem, Select } from "@mui/material";
const theme = createTheme();
export default function FormComponent(props) {
  const { accountRegister, isUpdate } = props;
  const { username, email, password, comfirmPassword, address, sex, role } =
    accountRegister;

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
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              {isUpdate ? "UPDATE FORM" : "SIGN UP FORM"}
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
                    value={username || ""}
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
                    value={email || ""}
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
                    value={address || ""}
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
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
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
                    required
                    fullWidth
                    id="password"
                    label="Enter Password"
                    name="password"
                    autoComplete="password"
                    type="password"
                    autoFocus
                    onChange={handleChange}
                    value={password || ""}
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
                    value={comfirmPassword || ""}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{ background: isUpdate ? "blue" : "#04aa6d" }}
              >
                {isUpdate ? "UPDATE" : "SIGN UP"}
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
