'use client'

import React, { useState } from 'react'

import styles from './Logoin.module.css'
import { useRouter } from 'next/navigation'
import { login } from '@/api/auth'

type Props = {}

const LoginPage = (props: Props) => {
  const router = useRouter();
  
const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(username, password);
      router.push('/');
    } catch {
      setError('Неверный логин или пароль');
    }
  };

  return (
 <div> 
      <h1> 
        Login
      </h1>
       <div className={styles.container}>
      <form className={styles.login__form} onSubmit={handleSubmit}>
        <h2>Вход</h2>
        {error && <div className={styles.error__message}>{error}</div>}
        <div className={styles.form__group}>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            placeholder="Введите имя пользователя"
          />
        </div>
        <div className={styles.form__group}>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            placeholder="Введите пароль"
          />
        </div>
        <button type="submit" className={styles.submit__button}>Войти</button>
      </form>
    </div>
    </div>
  )
}

export default LoginPage