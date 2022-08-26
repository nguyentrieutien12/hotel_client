import React from "react";

export default function BodyRecoveryTable(props) {
  const { bodyRecoverys } = props;
  const renderRecovery = () => {
    if (bodyRecoverys?.length > 0) {
      return bodyRecoverys.map((recovery) => {
        return (
          <tr key={recovery?.id}>
            <td>{recovery?.id}</td>
            <td>{recovery?.body_recovery_name}</td>
            <td>{recovery?.body_recovery_description}</td>
            <td>{recovery?.recovery?.recovery_name}</td>
            <td>{recovery?.video?.video_url.slice(0, 20)}</td>
            <td>
              <button
                onClick={() => props.handleUpdate(recovery)}
                type="button"
                className="btn btn-success"
              >
                EDIT
              </button>
              <button
                onClick={() => props.handleDelete(recovery?.id)}
                type="button"
                className="btn btn-danger"
              >
                DELETE
              </button>
            </td>
          </tr>
        );
      });
    }
  };
  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>DESCRIPTION</th>
            <th>TYPE</th>
            <th>VIDEO URL</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>{renderRecovery()}</tbody>
      </table>
    </div>
  );
}
