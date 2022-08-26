import React from "react";

export default function DishForm(props) {
  const { dishe_name, dishe_description, dishe_price } = props.dish;
  return (
    <div>
      <form action="" method="POST" role="form">
        <legend>Form title</legend>

        <div className="form-group">
          <label>label</label>
          <input
            name="dishe_name"
            className="form-control"
            placeholder="Input field"
            onChange={props.handleChange}
            value={dishe_name}
          />
        </div>
        <div className="form-group">
          <label>label</label>
          <input
            name="dishe_description"
            className="form-control"
            placeholder="Input field"
            onChange={props.handleChange}
            value={dishe_description}
          />
        </div>
        <div className="form-group">
          <label>label</label>
          <input
            name="dishe_price"
            className="form-control"
            placeholder="Input field"
            onChange={props.handleChange}
            value={dishe_price}
            type="number"
          />
        </div>
        <div className="form-group">
          <input
            type={"file"}
            multiple
            className="form-control"
            placeholder="Input field"
            ref={props.inputElement}
          />
        </div>

        <button
          onClick={props.handeClick}
          type="button"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
