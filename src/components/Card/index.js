// import React from "react";
import React from 'react';
import {Card as CardMUI} from '@mui/material';
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
import Button from '@mui/material/Button';
import * as dayjs from 'dayjs'
import { v4 as uuidv4 } from 'uuid';
import "./style.css";
import { Timeline } from '../Timeline';




export const Card = ({ list }) => {
  require('dayjs/locale/ru');
  return list.map((el) => (
    <CardMUI sx={{ maxWidth: 345 }} key={uuidv4()}>
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
        height="200"
        image={el.image}
        alt= {`${el.title} image`}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" noWrap>
          {el.text}
        </Typography>
        <Typography>
          Tags:
          {el.tags.map(el=>{
            return (
              <Button variant="outlined" size="small" sx={{ml: '10px'}} key={uuidv4()}>{el}
              </Button>
              )
          })}
        </Typography>
      </CardContent>
      <Timeline createdAt={dayjs(el.created_at).locale('ru').format('DD-MM-YYYY')} updatedAt={dayjs(el.updated_at).locale('ru').format('DD-MM-YYYY')}/>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>

      </CardActions>
    </CardMUI>
  ));
};