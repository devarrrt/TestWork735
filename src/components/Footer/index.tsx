'use client'

import styles from './Footer.module.css'

import { useAuthStore } from '@/store/authStore'


const Footer = () => {
    const {user } = useAuthStore()
  
return (
  <div className={styles.footer}>
    2025
  {user && (
    <div>
      <span> Logged as {user.name} </span>
    </div>
  )  
}
  </div>
)
}

export {Footer}
