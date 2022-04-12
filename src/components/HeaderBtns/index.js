import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LoginIcon from '@mui/icons-material/Login';
import IconButton from '@mui/material/IconButton';
import { Link } from '@mui/material';

const handlerFunc = () =>{
    console.log('Click LoginBtn!');
}

export const HeaderBtns = () => {
  return (
    <div>
        <Link href='https://github.com/sopel1996' sx={{mr: '10px'}}>
        <IconButton aria-label="GitHub">
        <GitHubIcon />
      </IconButton>
        </Link>
      <IconButton aria-label="Login" onClick={handlerFunc}>
        <LoginIcon />
      </IconButton>
    </div>
  )
}
