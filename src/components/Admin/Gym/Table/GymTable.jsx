import React from "react";
import { Link } from "react-router-dom";
export default function GymTable(props) {
  const { gyms } = props;
  const showImage = (images) => {
    return images.map((image) => {
      return `${image.image_url}\n`;
    });
  };
  const showGyms = () => {
    if (gyms?.length > 0) {
      return gyms[0].gyms.map((gym) => {
        return (
          <tr key={gym.id}>
            <td>{gym.id}</td>
            <td>
              <Link to={`${gym.id}`}>{gym.gym_name}</Link>
            </td>
            <td>{gym.gym_description}</td>
            <td>{showImage(gym?.images)}</td>
            <td>
              <button
                onClick={() => props.handleUpdate(gym)}
                type="button"
                className="btn btn-default"
              >
                EDIT
              </button>{" "}
              <button
                onClick={() => props.handleDeleteGym(gym.id)}
                type="button"
                className="btn btn-default"
              >
                DELETE
              </button>
            </td>
          </tr>
        );
      });
    }
  };
  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>DESCRIPTION</th>
            <th>IMAGES</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>{showGyms()}</tbody>
      </table>
    </div>
  );
}
