import React, { memo } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme();
function FormHotelComponentAdmin(props) {
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
          <h5> {props.isUpdate ? "UPDATE HOTEL FORM" : "CREATE HOTEL FORM"}</h5>
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
                ></TextField>
              </Grid>
              <Grid item xs={6}>
                <label htmlFor="img">
                  <i
                    style={{ fontSize: "40px", color: "rgb(4, 170, 109)" }}
                    className="my-3 fa-solid fa-image"
                  ></i>
                </label>

                <input
                  style={{ display: "none" }}
                  type="file"
                  name=""
                  id="img"
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
              style={{ background: props.isUpdate ? "blue" : "#04aa6d" }}
              onClick={props.handleCreateHotel}
            >
              {props.isUpdate ? "UPDATE" : "CREATE"}
            </Button>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}
export default memo(FormHotelComponentAdmin);
