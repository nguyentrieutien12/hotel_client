import React, { useContext, useEffect, useState } from "react";
import { ObjContext } from "../../../../containers/Admin/Account/AccountContainerAdmin";
import styles from "./table.module.css";
export default function TableComponentAdmin(props) {
  const { accountRegister, handleChange, handleSubmit, accounts } = props;

  const showAccounts = () => {
    return accounts.map((account) => {
      return (
        <tr key={account.id}>
          <td>{account?.id}</td>
          <td>{account?.username}</td>
          <td>{account?.email}</td>
          <td>{account?.address}</td>
          <td>{account?.phone_number}</td>
          <td>{account?.sex}</td>
          <td>{account?.role?.role_name}</td>
          <td style={{ display: "flex", alignItems: "center" }}>
            <button
              onClick={() => props.handleUpdate(account)}
              type="button"
              className="btn btn-danger m-2"
            >
              EDIT
            </button>
            <button
              onClick={() => props.handleDelete(account.id)}
              type="button"
              className="btn btn-success"
            >
              DELETE
            </button>
          </td>
        </tr>
      );
    });
  };
  return (
    <div className={`${styles.table__height}`}>
      <table className={`table table-hover `}>
        <thead>
          <tr>
            <th>ID</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Sex</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{showAccounts()}</tbody>
      </table>
    </div>
  );
}
