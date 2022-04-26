import React from 'react'
import { useEffect, useState } from "react";
import { POSTSONPAGE } from "../../utils/config";
import api from "../../utils/api";
import { Breadcrumbs } from '../Breadcrumbs'
import { CardList } from '../CardList'
import { HeaderLine } from '../HeaderLine'

export const LoginContent = ({list, setPostsState, pagesCnt, setPagesCnt, login, favorite, setFavorite, user, setUpdateAfterDelete}) => {
  
  const [page, setPage] = useState(1);
  useEffect(() => {
    if (login){
      sliceList(page);
    }
  }, [page, login]);

  const sliceList = (el) => {
    api.getPostsOnPage(el, POSTSONPAGE).then((data)=>{
      setPagesCnt(Math.ceil(data.total/POSTSONPAGE));
      setPostsState(data.posts);
    }
    )
    .catch((err)=>{alert(err)})
  };


  return (
    <>
        <Breadcrumbs setPage={setPage}/>
        <HeaderLine setPage={setPage} pagesCnt={pagesCnt}/>
        <CardList list={list}  pagesCnt={pagesCnt} favorite={favorite} setFavorite={setFavorite} user={user} setUpdateAfterDelete={setUpdateAfterDelete} setPage={setPage} page={page}/>
    </>
    
  )
}
