import React from "react";
import GymForm from "./Form/GymForm";
import GymTable from "./Table/GymTable";
export default function GymComponentAdmin(props) {
  return (
    <div>
      <div className="row main_container">
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <GymForm
            handleChange={props.handleChange}
            inputElement={props.inputElement}
            handleCreateGym={props.handleCreateGym}
            gym={props.gym}
          />
        </div>
        <div
          className="col-xs-9 col-sm-9 col-md-9 col-lg-9"
          style={{ height: "700px", overflowY: "scroll" }}
        >
          <GymTable
            gyms={props.gyms}
            handleDeleteGym={props.handleDeleteGym}
            handleUpdate={props.handleUpdate}
          />
        </div>
      </div>
    </div>
  );
}
