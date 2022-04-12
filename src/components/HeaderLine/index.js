import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import style from './style.module.css';
import cn from 'classnames';
const clickHandler = ()=>{
    console.log('Click on NewPostBtn');
}

export const HeaderLine = () => {
  return (
    <div className={style.headerLine}>
    <div className={cn(style.sectionInner, 'sectionInner')}>

    <Typography variant="h3" component="h3">
        Тут будет заголовок
    </Typography>    
        
      <Button variant="contained" onClick={clickHandler}>Новый пост</Button>
    </div>

    </div>
  )
}
