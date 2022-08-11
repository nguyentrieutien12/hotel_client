import React from "react";

export default function TableSpaComponent(props) {
  const renderImage = (images) => {
    return images.map((image) => {
      return `${image.image_url}\n`;
    });
  };
  const showSpas = () => {
    if (props.spas.length > 0) {
      return props.spas[0].spas.map((spa) => {
        console.log(spa);
        return (
          <tr key={spa.id}>
            <td>{spa.id}</td>
            <td>{spa.spa_name}</td>
            <td>{renderImage(spa.images)}</td>
            <td>{spa.spa_description}</td>
            <td>
              <button type="button" className="btn btn-success">
                EDIT
              </button>
              <button type="button" className="btn btn-danger">
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
            <th>IMAGES</th>
            <th>DESCRIPTION</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>{showSpas()}</tbody>
      </table>
    </div>
  );
}
