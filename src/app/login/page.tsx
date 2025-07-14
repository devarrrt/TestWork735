"use client";

import React, { useState } from "react";

import { useRouter } from "next/navigation";
import { login } from "@/api/auth";
import { validateLogin } from "@/utils/validateLogin";
import { useAuthStore } from "@/store/authStore";

import styles from "./Login.module.scss";

const LoginPage = () => {
  const router = useRouter();

  const { isLoading } = useAuthStore();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{
    username?: string;
    password?: string;
    common?: string;
  }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateLogin(username, password);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    try {
      await login(username, password);
      router.push("/");
    } catch {
      setErrors({ common: "Incorrect login or password" });
    }
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <h2 className={styles.title}>Вход</h2>

        <div className={styles.field}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={`${styles.input} ${errors.username ? styles.errorInput : ""}`}
          />
          {errors.username && (
            <p className={styles.errorText}>{errors.username}</p>
          )}
        </div>

        <div className={styles.field}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`${styles.input} ${errors.password ? styles.errorInput : ""}`}
          />
          {errors.password && (
            <p className={styles.errorText}>{errors.password}</p>
          )}
          {errors.common && <p className={styles.errorText}>{errors.common}</p>}
        </div>

        <button type="submit" disabled={isLoading} className={styles.button}>
          {isLoading ? "In progress..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
