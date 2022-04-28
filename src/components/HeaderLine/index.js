import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import style from './style.module.css';
import cn from 'classnames';
import { Modal } from '../Modal';

export const HeaderLine = ({setPage,pagesCnt,title}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className={style.headerLine}>
    <div className={cn(style.sectionInner, 'sectionInner')}>

    <Typography variant="h3" component="h3">
        {title?title:'Тут будет заголовок'}
    </Typography>    
        
      <Button variant="contained" onClick={handleOpen}>Новый пост</Button>

    </div>
      <Modal open={open} handleOpen={handleOpen} handleClose={handleClose} setPage={setPage} pagesCnt={pagesCnt}/>

    </div>
  )
}
