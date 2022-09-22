import React, { memo } from "react";

function BodyRecoveryForm(props) {
  const { recovery } = props;
  return (
    <div>
      <form action="" method="POST" role="form">
        <legend>
          {props.isUpdate
            ? "Update Body Recovery Form"
            : "Create Body Recovery Form"}
        </legend>
        <div className="form-group">
          <label htmlFor="">name</label>
          <input
            className="form-control"
            placeholder="Enter Name "
            name="body_recovery_name"
            onChange={props.handleChange}
            value={recovery.body_recovery_name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">description</label>
          <input
            className="form-control"
            placeholder="Enter Description"
            name="body_recovery_description"
            onChange={props.handleChange}
            value={recovery.body_recovery_description}
          />
        </div>
        <div className="form-group">
          <label htmlFor="file">
            <i
              style={{ fontSize: "40px", color: "rgb(4, 170, 109)" }}
              className=" fa-solid fa-image"
            ></i>
          </label>

          <input
            type="file"
            id="file"
            className="form-control d-none"
            placeholder="Input "
            multiple
            ref={props.inputElement}
          />
        </div>
        <div className="form-group">
          <span class="label">Type</span>

          <select
            className="form-control"
            name="recovery"
            value={recovery.recovery}
            onChange={props.handleChange}
          >
            {props.recoveryList.map((recovery) => {
              return (
                <option key={recovery.id} value={recovery.id}>
                  {recovery.recovery_name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="">Video String</label>
          <input
            className="form-control"
            placeholder="Enter Video String "
            name="video_url"
            onChange={props.handleChange}
            value={recovery.video_url}
          />
        </div>
        <button
          type="submit"
          className="btn btn-success my-3"
          onClick={props.handleOnClick}
        >
          {props.isUpdate ? "UPDATE" : "CREATE"}
        </button>
      </form>
    </div>
  );
}
export default memo(BodyRecoveryForm);
