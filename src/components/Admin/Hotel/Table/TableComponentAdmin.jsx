import React from "react";
import styles from "./table.module.css";
import { Link } from "react-router-dom";
export default function TableComponentAdmin(props) {
  const { hotels } = props;
  const renderImage = (images) => {
    if (images?.length > 0) {
      return images.map((image) => {
        return `${image.image_url.slice(0, 20)}... \n`;
      });
    }
    return [];
  };
  const showHotel = () => {
    return hotels.map((hotel) => {
      return (
        <tr key={hotel.id}>
          <td>
            <Link to={`${hotel.id}`}> {hotel.hotel_name}</Link>
          </td>
          <td>{hotel.hotel_email}</td>
          <td>{hotel.hotel_address}</td>
          <td style={{ width: "3.33%" }}>{renderImage(hotel.images)}</td>
          <td>
            <img src={hotel.qr.qr_link} />
          </td>
          <td style={{ flexWrap: "nowrap" }}>
            <button
              onClick={() => props.handleUpdateHotel(hotel)}
              type="button"
              className="btn btn-danger m-2"
            >
              EDIT
            </button>
            <button
              onClick={() => props.handleDeleteHotel(hotel.id)}
              type="button"
              className="btn btn-success"
            >
              DELETE
            </button>
          </td>
        </tr>
      );
    });
  };
  return (
    <div className={styles.table}>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ADDRESS</th>
            <th>IMAGES</th>
            <th>QRCODE</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{showHotel()}</tbody>
      </table>
    </div>
  );
}
