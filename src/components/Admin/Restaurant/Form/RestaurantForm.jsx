import React from "react";

export default function RestaurantForm(props) {
  const { restaurant_description, restaurant_name } = props.restaurant;
  return (
    <div>
      <form action="" method="POST" role="form">
        <legend>Restaurant Form </legend>
        <div className="form-group">
          <label>Restaurant Name</label>
          <input
            name="restaurant_name"
            className="form-control"
            placeholder="Enter Restaurant Name"
            onChange={props.handleChangeRestaurant}
            value={restaurant_name}
          />
        </div>{" "}
        <div className="form-group">
          <label>Description</label>
          <input
            name="restaurant_description"
            className="form-control"
            placeholder="Enter Description"
            onChange={props.handleChangeRestaurant}
            value={restaurant_description}
          />
        </div>{" "}
        <div className="form-group">
          <label>Images</label>
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
          className="btn btn-primary my-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
