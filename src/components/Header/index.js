import React from 'react'
import style from './style.module.css';


export const Header = ({ children }) => {
  return (
    <div className={style.header}>
            <div className="sectionInner">
                <div className={style.header__wrapper}>
                    {children}
                </div>
            </div>
        </div>
  )
}
