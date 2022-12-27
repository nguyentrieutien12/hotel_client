import React from "react";

export default function GymForm(props) {
  const { gym_name, gym_description } = props.gym;
  return (
    <div>
      <form action="" method="POST" role="form">
        <legend>Gym Form </legend>

        <div className="form-group">
          <label>Gym Name</label>
          <input
            type="text"
            className="form-control"
            name="gym_name"
            placeholder="Enter Gym Name"
            value={gym_name}
            onChange={props.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Gym Description</label>
          <input
            type="text"
            className="form-control"
            name="gym_description"
            placeholder="Enter Gym Description"
            onChange={props.handleChange}
            value={gym_description}
          />
        </div>
        <div className="form-group">
          <input type="file" multiple ref={props.inputElement} />
        </div>
        <button
          onClick={props.handleCreateGym}
          className="btn btn-primary my-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
