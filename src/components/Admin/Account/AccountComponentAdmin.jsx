import { Grid } from "@mui/material";
import React from "react";
import styles from "./account.module.css";
import FormComponent from "./Form/FormComponent";
import TableComponentAdmin from "./Table/TableComponentAdmin";
export default function AccountComponentAdmin(props) {
  return (
    <div>
      <Grid container>
        <Grid item xs={4}>
          <FormComponent />
        </Grid>
        <Grid item xs={8}>
          <TableComponentAdmin />
        </Grid>
      </Grid>
    </div>
  );
}
