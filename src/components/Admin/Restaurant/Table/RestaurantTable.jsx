import React from "react";
import { Link } from "react-router-dom";
export default function RestaurantTable(props) {
  const { restaurants } = props;
  const showImage = (images) => {
    return images.map((image) => {
      return `${image.image_url}\n`;
    });
  };
  const showRestaurants = () => {
    if (restaurants?.length > 0) {
      return restaurants[0].restaurants.map((restaurant) => {
        return (
          <tr key={restaurant.id}>
            <td>{restaurant.id}</td>
            <td>
              <Link to={`${restaurant.id}`}>{restaurant.restaurant_name}</Link>
            </td>
            <td>{restaurant.restaurant_description}</td>
            <td style={{ width: "100px" }}>{showImage(restaurant.images)}</td>
            <td>
              <button
                onClick={() => props.handleUpdate(restaurant)}
                type="button"
                className="btn btn-success"
              >
                EDIT
              </button>
              <button
                onClick={() => props.handleDelete(restaurant.id)}
                type="button"
                className="btn btn-danger"
              >
                DELETE
              </button>
            </td>
          </tr>
        );
        {
        }
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
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>{showRestaurants()}</tbody>
      </table>
    </div>
  );
}
