"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "tabler-icons-react";

import styles from "./MenuList.module.scss";

import "../../styles/globals.scss";

const menuItems = [
  "Home",
  "Hot deals",
  "Categories",
  "Laptops",
  "Smartphones",
  "Cameras",
  "Accessories",
];

const MenuList = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.menu}>
      <div className="container">
        <button
          className={styles.burger}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <X size={24} color="#000" />
          ) : (
            <>
              <span>Menu</span>
              <Menu size={24} color="#000" />
            </>
          )}
        </button>

        <ul className={`${styles.menuList} ${isOpen ? styles.open : ""}`}>
          {menuItems.map((item) => (
            <li key={item} className={styles.menuItem}>
              <Link href="#">{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { MenuList };
