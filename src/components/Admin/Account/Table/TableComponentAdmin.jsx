import React, { useContext, useEffect, useState } from "react";
import { ObjContext } from "../../../../containers/Admin/Account/AccountContainerAdmin";

export default function TableComponentAdmin() {
  const { accounts } = useContext(ObjContext);
  const [accountList, setAccountList] = useState([]);
  useEffect(() => {
    if (accounts.length > 1) {
      setAccountList(accounts);
    }
  }, [accounts]);
  const showAccounts = () => {
    const accountMap = accountList.map((account) => {
      return (
        <tr key={account.id}>
          <td>{account.id}</td>
          <td>{account.username}</td>
          <td>{account.address}</td>
          <td>{account.email}</td>
          <td>{account.role.role_name}</td>
          <td>
            <button type="button" className="btn btn-danger m-2">
              EDIT
            </button>
            <button type="button" className="btn btn-success">
              DELETE
            </button>
          </td>
        </tr>
      );
    });
    return accountMap;
  };
  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>User Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{showAccounts()}</tbody>
      </table>
    </div>
  );
}

<table className="table table-hover">
  <thead>
    <tr>
      <th></th>
    </tr>
  </thead>
  <tbody></tbody>
</table>;
