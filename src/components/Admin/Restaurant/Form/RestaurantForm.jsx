import React from "react";

export default function RestaurantForm(props) {
  const { restaurant_description, restaurant_name } = props.restaurant;
  return (
    <div>
      <form action="" method="POST" role="form">
        <legend>Form title</legend>
        <div className="form-group">
          <label>label</label>
          <input
            name="restaurant_name"
            className="form-control"
            placeholder="Input field"
            onChange={props.handleChangeRestaurant}
            value={restaurant_name}
          />
        </div>{" "}
        <div className="form-group">
          <label>label</label>
          <input
            name="restaurant_description"
            className="form-control"
            placeholder="Input field"
            onChange={props.handleChangeRestaurant}
            value={restaurant_description}
          />
        </div>{" "}
        <div className="form-group">
          <label>label</label>
          <input
            type="file"
            className="form-control"
            placeholder="Input field"
            multiple
            ref={props.inputElement}
          />
        </div>
        <button
          onClick={props.handleCreateRes}
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
