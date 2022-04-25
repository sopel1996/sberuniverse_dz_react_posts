import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Modal as ModalMUI} from '@mui/material';
import Input from '@mui/material/Input';
import { TextField, Grid} from '@mui/material';
import { useNavigate } from 'react-router-dom';

import api from '../../utils/api';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const ariaLabel = { 'aria-label': 'description' };

export const Modal = ({open,handleOpen,handleClose}) => {
  
  const navigate = useNavigate();
  const handleSubmit = (event) => {
      event.preventDefault();
      const {
          target: { inputName, inputText, inputImg, inputTags },
      } = event;
      let tmp = inputTags.value.split(',');
      let tags = [];
      tmp.forEach(el => {
        tags.push(el.trim());
      });
      api.addPosts({
        title: inputName.value, // name(ключ объекта) : name.value(обращение к value input из узла дома event target)
        text: inputText.value,
        image: inputImg.value,
        tags: tags,
      })
          .then((data) => {
              navigate('/all_posts');
              handleClose();
          })
          .catch((err) => alert(err));
  };

  return (
    <div>
      <ModalMUI
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
              <Grid container flexDirection='column' spacing='10'>
                  <Grid item>
                      <TextField label='Название' name='inputName' variant='outlined' />
                  </Grid>
                  <Grid item>
                      <TextField label='Текст поста' name='inputText' variant='outlined' />
                  </Grid>
                  <Grid item>
                      <TextField label='Изображение' name='inputImg' variant='outlined' />
                  </Grid>
                  <Grid item>
                      <TextField label='Теги' name='inputTags' variant='outlined' />
                  </Grid>
                  <Grid item>
                      <Button type='submit' variant='contained' size='small'>
                          Добавить пост
                      </Button>
                  </Grid>
              </Grid>
          </form>
        </Box>
      </ModalMUI>
    </div>
  );
}
