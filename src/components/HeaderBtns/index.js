import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LoginIcon from "@mui/icons-material/Login";
import api from '../../utils/api';

export default function HeaderBtns ({isLogin,setLogin,name}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const loginFunc = () => {
    console.log("Click LoginBtn!");
    localStorage.setItem(
      'token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjRmMjY2YWFlMTlmNTQ2ZGMwODNhNTEiLCJpYXQiOjE2NDkzNTQzNTUsImV4cCI6MTY4MDg5MDM1NX0.bo6XNJROxKiRXGpyEl527oKcQQFw2Q6SzRlb9nNsiiY',
      );
      setLogin(true);
    };
    
    const logoutFunc = () => {
      console.log("Click LogoutBtn!");
      localStorage.setItem('token', '',);

      setLogin(false)
  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
      <Link href="https://github.com/sopel1996" sx={{ mr: "10px" }}>
        <IconButton aria-label="GitHub">
          <GitHubIcon />
        </IconButton>
      </Link>
      {isLogin ? (
        <Tooltip title="Account settings">
        <IconButton
          onMouseOver={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar sx={{ width: 32, height: 32 }}>{name?.slice(0,1)}</Avatar>
        </IconButton>
      </Tooltip>
      ) : (
        <IconButton aria-label="Login" onClick={loginFunc}>
          <LoginIcon />
        </IconButton>
      )}
        
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar /> {name}
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={logoutFunc}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}