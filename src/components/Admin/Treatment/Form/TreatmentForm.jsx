import React from "react";
export default function TreatmentForm(props) {
  const handleOnChange = (e) => {
    props.handleOnChange(e);
  };
  return (
    <div>
      <form action="" method="POST" role="form">
        <legend>Form title</legend>
        <div className="form-group">
          <label htmlFor="">label</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Treatment Name"
            name="treatment_name"
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">label</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Treatment Description"
            name="treatment_description"
            onChange={handleOnChange}
          />
        </div>{" "}
        <div className="form-group">
          <label htmlFor="">label</label>
          <input
            type="number"
            className="form-control"
            required="required"
            placeholder="Enter Treatment Price"
            name="treatment_price"
            onChange={handleOnChange}
          />
        </div>{" "}
        <div className="form-group">
          <input
            type="file"
            id="input"
            className="form-control"
            multiple
            ref={props.inputElement}
          />
        </div>
        <button
          onClick={props.handleOnCreateTreatment}
          type="button"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
