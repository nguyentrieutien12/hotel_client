import React from "react";
import DishForm from "./Form/DishForm";
import DishTable from "./Table/DishTable";

export default function DishesComponent(props) {
  return (
    <div>
      <div className="row">
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <DishForm
            handleChange={props.handleChange}
            inputElement={props.inputElement}
            handeClick={props.handeClick}
            dish={props.dish}
          />
        </div>

        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
          <DishTable
            dishes={props.dishes}
            handleDeleteDish={props.handleDeleteDish}
            handleUpdateDish={props.handleUpdateDish}
          />
        </div>
      </div>
    </div>
  );
}
