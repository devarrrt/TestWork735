"use client";

import React, { useState } from "react";
import { Phone, Mail, Location, User, Menu, X } from "tabler-icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { useAuthStore } from "@/store/authStore";

import styles from "./Header.module.scss";

const Header = () => {
  const router = useRouter();
  const { user, logout } = useAuthStore();
  const [menuOpen, setMenuOpen] = useState(false);

  const hanleLogout = (e: React.FormEvent) => {
    e.preventDefault();
    logout();
    router.push("/login");
  };

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerTop}>
          <button
            className={styles.burger}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X color="#fff" size={26} />
            ) : (
              <Menu color="#fff" size={26} />
            )}
          </button>

          <ul className={`${styles.headerInfo} ${menuOpen ? styles.open : ""}`}>
            <li>
              <Phone color="#d1000f" size={22} />
              <span> +374 232 99 39</span>
            </li>
            <li>
              <Mail color="#d1000f" size={22} />
              <span> shop@gmail.com</span>
            </li>
            <li>
              <Location color="#d1000f" size={22} />
              <span> 1272 New York </span>
            </li>
          </ul>

          <div className={styles.headerLogin}>
            <User color="#d1000f" size={22} />
            {user ? (
              <button onClick={hanleLogout} style={{ color: "#fff" }}>
                Logout
              </button>
            ) : (
              <Link href="/login"> Login </Link>
            )}
          </div>
        </div>

        <div className={styles.headerBottom}>
          <h1>
            <Link href="/">
              Abelohosh shop <span style={{ color: "red" }}>.</span>
            </Link>
          </h1>
          <div>
            <Image
              src="https://placehold.co/600x70/000000/FFFFFF.png"
              width={600}
              height={70}
              alt="Some pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Header };
