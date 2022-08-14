import React from "react";

export default function WorkoutForm(props) {
  const { workout_name, workout_description, workout_price } = props.workout;
  return (
    <div>
      <form action="" method="POST" role="form">
        <legend>Form title</legend>

        <div className="form-group">
          <label>label</label>
          <input
            type="text"
            className="form-control"
            placeholder="Input field"
            name="workout_name"
            value={workout_name}
            onChange={props.handleOnChange}
          />
        </div>
        <div className="form-group">
          <label>label</label>
          <input
            type="text"
            className="form-control"
            placeholder="Input field"
            name="workout_description"
            onChange={props.handleOnChange}
            value={workout_description}
          />
        </div>
        <div className="form-group">
          <label>label</label>
          <input
            type="number"
            className="form-control"
            placeholder="Input field"
            name="workout_price"
            onChange={props.handleOnChange}
            value={workout_price}
          />
        </div>
        <div className="form-group">
          <input type="file" multiple ref={props.inputElement} />
        </div>

        <button
          onClick={props.handleOnClick}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
