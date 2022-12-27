import React from "react";
import "./../../../../main.css";
export default function FormSpaComponent(props) {
  const { inputElement, spa, isUpdate } = props;
  const handleChangeSpa = (e) => {
    props.handleChangeSpa(e);
  };
  return (
    <div>
      <form action="" method="POST" role="form">
        <legend>{isUpdate ? "FORM UPDATE SPA" : "FORM CREATE SPA"}</legend>
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
            value={spa.spa_name}
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
            value={spa.spa_description}
          ></textarea>
        </div>
        <div className="form-group">
          <input type="file" multiple ref={inputElement} />
        </div>
        <div className="form-group">
          {" "}
          <button
            onClick={props.handleCreateSpa}
            type="button"
            className="btn btn-primary"
          >
            {isUpdate ? "UPDATE" : "CREATE"}
          </button>
        </div>
      </form>
    </div>
  );
}
