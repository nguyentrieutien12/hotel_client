import React from "react";

export default function TreatmentTable(props) {
  const { treatments } = props;
  const showImages = (images) => {
    return images.map((image) => {
      return `${image.image_url}\n`;
    });
  };
  const showTreatments = () => {
    if (treatments?.length > 0) {
      return treatments[0]?.treatments.map((treatment) => {
        return (
          <tr>
            <td>{treatment.id}</td>
            <td>{treatment.treatment_name}</td>
            <td>{treatment.treatment_description}</td>
            <td style={{ width: "100px" }}>{showImages(treatment.images)}</td>
            <td>{treatment.treatment_price}</td>
            <td>
              <button
                onClick={() => props.handleUpdateTreatment(treatment)}
                type="button"
                className="btn btn-success"
              >
                EDIT
              </button>
              <button
                onClick={() => props.handleDeleteTreatment(treatment.id)}
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
      <table
        className="table table-hover"
        style={{ height: "700px", overflowY: "scroll" }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>DESCRIPTION</th>
            <th>IMAGES</th>
            <th>PRICE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>{showTreatments()}</tbody>
      </table>
    </div>
  );
}
