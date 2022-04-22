import React from 'react'
import { Breadcrumbs } from '../Breadcrumbs'
import { CardList } from '../CardList'
import { HeaderLine } from '../HeaderLine'

export const LoginContent = ({list, setPostsState, pagesCnt, setPagesCnt, login, favorite, setFavorite, user, setUpdateAfterDelete}) => {
  return (
    <>
        <Breadcrumbs />
        <HeaderLine />
        <CardList list={list} setPostsState={setPostsState} pagesCnt={pagesCnt} setPagesCnt={setPagesCnt} login={login} favorite={favorite} setFavorite={setFavorite} user={user} setUpdateAfterDelete={setUpdateAfterDelete}/>
    </>
    
  )
}
