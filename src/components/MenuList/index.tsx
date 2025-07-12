import React from 'react'

import styles from './MenuList.module.css'

import '../../styles/globals.css'

type Props = {}

const MenuList = (props: Props) => {
  return (
    <div className={styles.menu}>
          <div className='container'>
    <ul className={styles.menu__list}>
      <li className={styles.menu__item}>  
        <span>
      Home

        </span>
      </li>  
       <li className={styles.menu__item}>  
        <span> 
      Hot deals
        </span>
      </li>  

       <li className={styles.menu__item}>  
        <span> 
      Home
          </span>
      </li>  
        <li className={styles.menu__item}>  
          <span>
      Categories
          </span>
      </li>

      <li className={styles.menu__item}>  
        <span>
      Categories
        </span>
      </li>

      <li className={styles.menu__item}>  
        <span>
      Laptops

        </span>

      </li>

      <li className={styles.menu__item}>  
        <span>
      Smartphones

        </span>
      </li>

       <li className={styles.menu__item}>  
        <span>
      Cameras

        </span>
      </li>


       <li className={styles.menu__item}>  
        <span>
      Accessories
          
        </span>
      </li>
      

      

      </ul> 
          </div>
  
    {/* </div> */}
    </div>

  )
}

export  {MenuList}