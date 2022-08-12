import React from "react";
import RestaurantForm from "./Form/RestaurantForm";
import RestaurantTable from "./Table/RestaurantTable";

export default function RestaurantComponentAdmin(props) {
  return (
    <div>
      <div className="row">
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <RestaurantForm
            handleChangeRestaurant={props.handleChangeRestaurant}
            inputElement={props.inputElement}
            handleCreateRes={props.handleCreateRes}
          />
        </div>

        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
          <RestaurantTable />
        </div>
      </div>
    </div>
  );
}
