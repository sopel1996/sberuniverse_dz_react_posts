import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../utils/api";

import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import { Comments } from "../comments";

import List from '@mui/material/List';
import { HeaderLine } from "../HeaderLine";




export const Item = ({setPage, pagesCnt}) => {
  const [item, setItem] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    api
      .deleteProduct(params.itemID)
      .then((data) => {
        console.log(data);
        navigate("/all_posts");
      })
      .catch((err) => alert(err));
  };

  const navigateToEditPage = () => {
    navigate(`edit`);
  };

  useEffect(() => {
    api
      .getPosts(params.itemID)
      .then((data) => setItem(data))
      .catch((err) => alert(err));
  }, []);
  return (
    <div className="sectionInner">
      {item && (
        <>
        <HeaderLine setPage={setPage} pagesCnt={pagesCnt}/>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button
              onClick={navigateToEditPage}
              variant="contained"
              color="warning"
              size="small"
            >
              Редактировать пост
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              onClick={handleClick}
              variant="contained"
              color="primary"
              size="small"
            >
              Удалить пост
            </Button>
          </Grid>
          <Grid item container xs={6}>
            <Grid item xs={12}>
              <img
                style={{
                  maxHeight: 330,
                  maxWidth: 330,
                }}
                src={item.image}
                alt={item.title}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h3">{item.name}</Typography>
              <Typography variant="subtitle1">{item.text}</Typography>
            </Grid>
                </Grid>
            <Grid item xs={6}>
                

            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
           
                {item.comments.map((el)=>{
                    return <Comments comment={el} key={el._id}/>
                })}
            </List>


            </Grid>
        </Grid>
        </>

      )}
    </div>
  );
};
