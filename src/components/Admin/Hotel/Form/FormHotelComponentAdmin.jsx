import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme();
export default function FormHotelComponentAdmin(props) {
  const { hotel } = props;
  const handleSubmit = (e) => {
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
              {"CREATE HOTEL FORM"}
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
                    label="Enter Hotel Name"
                    name="hotel_name"
                    autoFocus
                    onChange={handleChange}
                    value={hotel.hotel_name}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Enter Email"
                    name="hotel_email"
                    autoFocus
                    onChange={handleChange}
                    value={hotel.hotel_email}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Enter Address"
                    name="hotel_address"
                    autoFocus
                    onChange={handleChange}
                    value={hotel.hotel_address}
                  />
                </Grid>
                <Grid item xs={6}>
                  <input
                    type="file"
                    name=""
                    id="input"
                    multiple
                    ref={props.inputElement}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{ background: "#04aa6d" }}
                onClick={props.handleCreateHotel}
              >
                {"CREATE"}
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
