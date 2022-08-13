import React from "react";

export default function DishTable(props) {
  const showImage = (images) => {
    return images.map((image) => {
      return `${image.image_url}\n`;
    });
  };
  const { dishes } = props;
  const showDishes = () => {
    return dishes[0].dishes.map((dish) => {
      return (
        <tr>
          <td>{dish.id}</td>
          <td>{dish.dishe_name}</td>
          <td>{dish.dishe_description}</td>
          <td>{dish.dishe_price}</td>
          <td>{showImage(dish.images)}</td>
          <td>
            {" "}
            <button
              //   onClick={() => props.handleUpdateTreatment(treatment)}
              type="button"
              className="btn btn-success"
            >
              EDIT
            </button>
            <button
              //   onClick={() => props.handleDeleteTreatment(treatment.id)}
              type="button"
              className="btn btn-danger"
            >
              DELETE
            </button>
          </td>
        </tr>
      );
    });
  };
  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>DESCRIPTION</th>
            <th>PRICE</th>
            <th>IMAGES</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>{showDishes()}</tbody>
      </table>
    </div>
  );
}
