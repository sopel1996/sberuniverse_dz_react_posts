import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { Link } from "@mui/material";
import { Link as LinkRoute } from 'react-router-dom';

import GitHubIcon from "@mui/icons-material/GitHub";
import LoginIcon from "@mui/icons-material/Login";

export default function HeaderBtns({ isLogin, setLogin, user }) {
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
      "token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjRmMjY2YWFlMTlmNTQ2ZGMwODNhNTEiLCJpYXQiOjE2NDkzNTQzNTUsImV4cCI6MTY4MDg5MDM1NX0.bo6XNJROxKiRXGpyEl527oKcQQFw2Q6SzRlb9nNsiiY"
    );
    localStorage.setItem("userID", "624f266aae19f546dc083a51");
    setLogin(true);
  };

  const logoutFunc = () => {
    console.log("Click LogoutBtn!");
    localStorage.setItem("token", "");
    setLogin(false);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
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
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}>
                {user?.name.slice(0, 1)}
              </Avatar>
            </IconButton>
          </Tooltip>
        ) : (
          // <LinkRoute to={'/all_posts'}>
          // <IconButton aria-label="Login" onClick={loginFunc}>
          //   <LoginIcon />
          // </IconButton>
          // </LinkRoute>
          null
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
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Avatar src={user?.avatar}/>

          <div>
            <div>{user?.name}</div>
            <div>{user?.email}</div>
          </div>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={logoutFunc}>
          <LinkRoute to={'/'}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
          </LinkRoute>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
