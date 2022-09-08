import React from "react";
import styles from "./sidebar.module.css";
import { Link } from "react-router-dom";
export default function SideBarComponentAdmin() {
  const links = [
    {
      text: "Accounts Manage",
      to: `account`,
    },
    {
      text: "Hotels Manage",
      to: `hotel`,
    },
    {
      text: "Body Recovery Manage",
      to: `body-recovery`,
    },
    {
      text: "Order Manage",
      to: `order`,
    },
  ];
  const handlePickMenu = (e) => {
    const itemsElement = document.querySelectorAll(`.${styles.link_item}`);
    itemsElement.forEach((item) => {
      item.classList.remove(`${styles.bgColor}`);
    });
    e.target.classList.add(`${styles.bgColor}`);
  };
  const showLinks = () => {
    return links.map((link, index) => {
      return (
        <Link
          onClick={handlePickMenu}
          key={index}
          className={styles.link_item}
          to={link.to}
        >
          {link.text}
        </Link>
      );
    });
  };
  return <div className={styles.link_container}>{showLinks()}</div>;
}
