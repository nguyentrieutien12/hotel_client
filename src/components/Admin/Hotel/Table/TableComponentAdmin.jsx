import React from "react";
import styles from "./table.module.css";
export default function TableComponentAdmin(props) {
  const { hotels } = props;
  const renderImage = (images) => {
    return images.map((image) => {
      return `${image.image_url}\n`;
    });
  };
  const showHotel = () => {
    return hotels.map((hotel) => {
      return (
        <tr key={hotel.id}>
          <td>{hotel.id}</td>
          <td>{hotel.hotel_name}</td>
          <td>{hotel.hotel_address}</td>
          <td style={{ width: "3.33%" }}>{renderImage(hotel.images)}</td>
          <td>
            <img src={hotel.qr.qr_link} />
          </td>
          <td>
            <button type="button" className="btn btn-danger m-2">
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
            <th>ID</th>
            <th>NAME</th>
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
