import { Link, Typography } from "@mui/material";
import React from "react";

export default function CopyrightComponent() {
  return (
    <div>
      {" "}
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </div>
  );
}
