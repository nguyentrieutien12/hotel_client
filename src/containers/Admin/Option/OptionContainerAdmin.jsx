import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function OptionContainerAdmin() {
  const [option, setOption] = useState("spa");
  const navigate = useNavigate();
  const { id } = useParams();
  const handleRedirectOption = (e) => {
    const { value } = e.target;
    navigate(`/dashboard/hotel/${id}/${value}`);
    setOption(value);
  };
  useEffect(() => {
    navigate("spa");
  }, []);
  return (
    <div>
      <select
        onChange={handleRedirectOption}
        name="option"
        id="input"
        className="form-control"
        required="required"
        value={option}
      >
        <option value="spa">Spa</option>
        <option value="restaurant">Restaurant</option>
        <option value="gym">Gym</option>
        <option value="seftcare">SeftCare</option>
      </select>
      <Outlet />
    </div>
  );
}
