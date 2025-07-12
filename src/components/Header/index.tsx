'use client'
import React from 'react'

import styles from './Header.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/store/authStore'

type Props = {}

const Header = (props: Props) => {
  const router = useRouter();

  const {user,logout } = useAuthStore()

  const hanleLogout = (e: React.FormEvent) => {
      e.preventDefault();
         logout();
        router.push('/login');
    };
  
  return (
    <div className={styles.header}>
      <div className={styles.container}>

        <div className={styles.header__inner}> 

        <div className={styles.header__top}>

          <ul className={styles.header__info}>
            <li>
              {/* <icon> # </icon> */}
              <span> +374 232 99 39</span>
            </li>
               <li>
              {/* <icon> # </icon> */}
              <span> shop@gmail.com</span>
            </li>
                   <li>
              {/* <icon> # </icon> */}
              <span> 1272 New York </span>
            </li>
          </ul>

            <div className={styles.header__login}>
              {user ? (
                <>
                  {/* <icon> # </icon> */}
                <button onClick={hanleLogout}>
                  <p style={{color: '#fff' }}> 
                    
                    Loout 
                    </p> </button>
                </>
                  ): (
                <>
                  {/* <icon> # </icon> */}
              <Link href="/login"> Login </Link>
                </>
    
              )}
             
          </div>
        </div>


        <div className={styles.header__bottom}>
            <h1> Abelohosh shop <span style={{ color: 'red' }}>.</span> </h1>
            <div>
              <Image src='/bg.jpg'
                      width={600}
                      height={70}
                      alt="Some pic"/>
            </div>
        </div>
         </div>
      </div>
    </div>
  )
}

export {Header}