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
  const showLinks = () => {
    return links.map((link, index) => {
      return (
        <Link key={index} className={styles.link_item} to={link.to}>
          {link.text}
        </Link>
      );
    });
  };
  return <div className={styles.link_container}>{showLinks()}</div>;
}
