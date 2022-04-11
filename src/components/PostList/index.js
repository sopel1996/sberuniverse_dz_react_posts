// import React from "react";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import * as dayjs from 'dayjs'

import "./style.css";




export const PostList = ({ list }) => {
  require('dayjs/locale/ru');
  return list.map((el) => (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={el.title}
        subheader={dayjs(el.created_at).locale('ru').format('DD MMMM YYYY')}
      />
      <CardMedia
        component="img"
        height="194"
        image={el.image}
        alt= {`${el.title} image`}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" noWrap>
          {el.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>

      </CardActions>
    </Card>
  ));
};