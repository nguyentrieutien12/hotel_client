import React from "react";
import WorkoutForm from "./Form/WorkoutForm";
import WorkoutTable from "./Table/WorkoutTable";

export default function WorkoutComponent(props) {
  return (
    <div>
      <div className="row">
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <WorkoutForm
            handleOnChange={props.handleOnChange}
            inputElement={props.inputElement}
            handleOnClick={props.handleOnClick}
            workout={props.workout}
          />
        </div>

        <div
          className="col-xs-9 col-sm-9 col-md-9 col-lg-9"
          style={{ height: "700px", overflowY: "scroll" }}
        >
          <WorkoutTable
            workouts={props.workouts}
            handleOnDelete={props.handleOnDelete}
            handleUpdate={props.handleUpdate}
          />
        </div>
      </div>
    </div>
  );
}
