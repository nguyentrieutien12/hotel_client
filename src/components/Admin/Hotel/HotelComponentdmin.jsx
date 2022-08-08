import React, { useState } from "react";
import FormHotelComponentAdmin from "./Form/FormHotelComponentAdmin";
import TableComponentAdmin from "./Table/TableComponentAdmin";

export default function HotelComponentdmin(props) {
  return (
    <div>
      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <FormHotelComponentAdmin
            inputElement={props.inputElement}
            handleChange={props.handleChange}
            handleCreateHotel={props.handleCreateHotel}
          />
        </div>

        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <TableComponentAdmin />
        </div>
      </div>
    </div>
  );
}
