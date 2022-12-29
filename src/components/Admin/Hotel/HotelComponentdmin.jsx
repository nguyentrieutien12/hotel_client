import React, { useState } from "react";
import FormHotelComponentAdmin from "./Form/FormHotelComponentAdmin";
import TableComponentAdmin from "./Table/TableComponentAdmin";

export default function HotelComponentdmin(props) {
  return (
    <div>
      <div className="row main_container">
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <FormHotelComponentAdmin
            inputElement={props.inputElement}
            handleChange={props.handleChange}
            handleCreateHotel={props.handleCreateHotel}
            hotel={props.hotel}
            isUpdate={props.isUpdate}
          />
        </div>

        <div
          className="col-xs-9 col-sm-9 col-md-9 col-lg-9"
          style={{ height: "700px", overflowY: "scroll" }}
        >
          <TableComponentAdmin
            hotels={props.hotels}
            handleDeleteHotel={props.handleDeleteHotel}
            handleUpdateHotel={props.handleUpdateHotel}
          />
        </div>
      </div>
    </div>
  );
}
