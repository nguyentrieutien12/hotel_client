import React from "react";
import { memo } from "react";
import BodyRecoveryForm from "./Form/BodyRecoveryForm";
import BodyRecoveryTable from "./Table/BodyRecoveryTable";

function BodyRecoveryComponentAdmin(props) {
  const { bodyRecoverys, inputElement, recoveryList, recovery, isUpdate } =
    props;
  return (
    <div>
      <div className="row">
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <BodyRecoveryForm
            handleChange={props.handleChange}
            inputElement={inputElement}
            handleOnClick={props.handleOnClick}
            recoveryList={recoveryList}
            recovery={recovery}
            isUpdate={isUpdate}
          />
        </div>

        <div
          className="col-xs-9 col-sm-9 col-md-9 col-lg-9"
          style={{ height: "700px", overflowY: "scroll" }}
        >
          <BodyRecoveryTable
            bodyRecoverys={bodyRecoverys}
            handleDelete={props.handleDelete}
            handleUpdate={props.handleUpdate}
          />
        </div>
      </div>
    </div>
  );
}
export default memo(BodyRecoveryComponentAdmin);
