import React from "react";

export default function FormSpaComponent(props) {
  const { inputElement } = props;
  const handleChangeSpa = (e) => {
    props.handleChangeSpa(e);
  };
  return (
    <div>
      <form action="" method="POST" role="form">
        <legend>Form Spa</legend>

        <div className="form-group">
          <label htmlFor="name">Spa</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Spa Name"
            required="required"
            name="spa_name"
            onChange={handleChangeSpa}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            name="spa_description"
            id="description"
            className="form-control"
            rows="5"
            required="required"
            onChange={handleChangeSpa}
          ></textarea>
        </div>
        <div className="form-group">
          <input type="file" multiple ref={inputElement} />
        </div>
        <button
          onClick={props.handleCreateSpa}
          type="button"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
