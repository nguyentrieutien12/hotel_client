import React from "react";
import styles from "./sidebar.module.css";
import { Link } from "react-router-dom";
export default function SideBarComponentAdmin() {
  const links = [
    {
      text: "Accounts Manager",
      to: `account`,
    },
    {
      text: "Hotels Manager",
      to: `hotel`,
    },
  ];
  const showLinks = () => {
    return links.map((link) => {
      return (
        <Link key={link.to} className={styles.link_item} to={link.to}>
          {link.text}
        </Link>
      );
    });
  };
  return <div className={styles.link_container}>{showLinks()}</div>;
}
