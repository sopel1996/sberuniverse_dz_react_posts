import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import api from '../../utils/api'

import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

export const Comments = ({comment}) => {
    let [commentAuthor, setCommentAuthor] = useState();
    useEffect(()=>{
        api.getUserInfo(comment.author).
        then((data)=>{console.log(data);setCommentAuthor(data)})
    },[])
  return (
      <>
    <ListItem alignItems="flex-start">
        <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={commentAuthor?.avatar} />
        </ListItemAvatar>
        <ListItemText
        primary={commentAuthor?.name}
        secondary={
            <React.Fragment>
            <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
                >
                {comment.text}
            </Typography>
            </React.Fragment>
        }
        />
    </ListItem>
    <Divider variant="inset" component="li" />
    </>
  )
}
