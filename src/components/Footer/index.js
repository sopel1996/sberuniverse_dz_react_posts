import React from "react";
import style from "./style.module.css";

import cn from "classnames";

export const Footer = ({children}) => {
  return (
    <div className={style.footerContainer}>
            <div className={cn(style.sectionInner, 'sectionInner')}>
                    {children}
            </div>
        </div>
  )
};
