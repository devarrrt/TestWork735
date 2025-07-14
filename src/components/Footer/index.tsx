"use client";

import styles from "./Footer.module.scss";

import { useAuthStore } from "@/store/authStore";

const Footer = () => {
  const { user } = useAuthStore();

  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footerInner}>
          2025
          {user && (
            <div>
              <span> Logged as {user?.name} </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { Footer };
