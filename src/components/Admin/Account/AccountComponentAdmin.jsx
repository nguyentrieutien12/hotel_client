import { Grid } from "@mui/material";
import React from "react";
import styles from "./account.module.css";
import FormComponent from "./Form/FormComponent";
import TableComponentAdmin from "./Table/TableComponentAdmin";
export default function AccountComponentAdmin(props) {
  const { accountRegister, handleChange, handleSubmit, accounts, isUpdate } =
    props;
  const handleDelete = (id) => {
    props.handleDelete(id);
  };
  return (
    <div>
      <div className="row main_container">
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <FormComponent
            handleChange={handleChange}
            accountRegister={accountRegister}
            handleSubmit={handleSubmit}
            isUpdate={isUpdate}
          />
        </div>
        <div
          className="col-xs-9 col-sm-9 col-md-9 col-lg-9"
          style={{ height: "700px", overflowY: "scroll" }}
        >
          <TableComponentAdmin
            accounts={accounts}
            handleDelete={handleDelete}
            handleUpdate={props.handleUpdate}
          />
        </div>
      </div>
    </div>
  );
}
