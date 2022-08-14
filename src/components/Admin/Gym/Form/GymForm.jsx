import React from "react";

export default function GymForm(props) {
  const { gym_name, gym_description } = props.gym;
  return (
    <div>
      <form action="" method="POST" role="form">
        <legend>Form title</legend>

        <div className="form-group">
          <label>label</label>
          <input
            type="text"
            className="form-control"
            name="gym_name"
            placeholder="Input field"
            value={gym_name}
            onChange={props.handleChange}
          />
        </div>
        <div className="form-group">
          <label>label</label>
          <input
            type="text"
            className="form-control"
            name="gym_description"
            placeholder="Input field"
            onChange={props.handleChange}
            value={gym_description}
          />
        </div>
        <div className="form-group">
          <input type="file" multiple ref={props.inputElement} />
        </div>
        <button onClick={props.handleCreateGym} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
