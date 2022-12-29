import React from "react";
import TreatmentForm from "./Form/TreatmentForm";
import TreatmentTable from "./Table/TreatmentTable";

export default function TreatmentComponent(props) {
  return (
    <div>
      <div className="row main_container">
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <TreatmentForm
            handleOnChange={props.handleOnChange}
            handleOnCreateTreatment={props.handleOnCreateTreatment}
            inputElement={props.inputElement}
            treatment={props.treatment}
          />
        </div>

        <div
          className="col-xs-9 col-sm-9 col-md-9 col-lg-9"
          style={{ height: "700px", overflowY: "scroll" }}
        >
          <TreatmentTable
            treatments={props.treatments}
            handleDeleteTreatment={props.handleDeleteTreatment}
            handleUpdateTreatment={props.handleUpdateTreatment}
          />
        </div>
      </div>
    </div>
  );
}
