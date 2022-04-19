import { useEffect, useState } from "react";
import { Card } from "../Card";
import styles from "./style.module.css";
import { POSTSONPAGE } from "../../utils/config";
import cn from 'classnames';
import { Pagination } from "../Pagination";
import { Typography } from "@mui/material";

export const CardList = ({ list, setPostsState, pagesCnt, login, favorite, setFavorite, user, setUpdateAfterDelete }) => {
  const [page, setPage] = useState(1);
  useEffect(() => {
    sliceList(page);
  }, [page]);

  
  const sliceList = (el) => {
    var slicedList = 0;
    if (localStorage.getItem("beginState")) {
      slicedList = JSON.parse(localStorage.getItem("beginState")).slice(
        POSTSONPAGE * (el - 1),
        POSTSONPAGE * el
      );
    } else {
      slicedList = list.slice(POSTSONPAGE * (el - 1), POSTSONPAGE * el);
    }
    setPostsState(slicedList);
  };

  if (login){
    return (
      <div className={cn('sectionInner', styles.cardListContainer)}>
        <div className={cn(styles.gridTable)}>
          {/* <Card list={list.slice(0,POSTSONPAGE)} /> */}
          
          {
            list?.slice(0,POSTSONPAGE).map((item) => (
              <Card post={item} key={item._id} isInFavorite={favorite.includes(item._id)} setFavorite={setFavorite} user={user} setUpdateAfterDelete={setUpdateAfterDelete} setPage={setPage}/>
              // <Card post={item} key={item._id} isInFavorite={item.likes.includes(userID)} setFavorite={setFavorite} like={item.likes.includes(userID)}/>
            ))  
          }
        </div>
        <Pagination pagesCnt={pagesCnt} setPage={setPage} page={page}/>
        </div>
  );
}else {return (
  <Typography>Авторизируйтесь (кнопка сверху справа)
    PS: авторизация пока фейковая
  </Typography>
)}
};
