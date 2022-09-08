import React from "react";

export default function TimeOrderComponent() {
  return (
    <div>
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5
              style={{ color: "black" }}
              class="modal-title"
              id="exampleModalLabel"
            >
              Pick Time To Order
            </h5>
          </div>
          <div class="modal-body">
          
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
