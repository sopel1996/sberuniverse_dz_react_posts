import { useEffect, useState } from "react";
import { Routes, Route, Link } from 'react-router-dom';

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import Logo  from "./components/Logo";
import HeaderBtns from "./components/HeaderBtns";
import { LoginContent } from "./components/LoginContent";

import api from "./utils/api";

import 'normalize.css';
import "./App.css";
import { Typography } from "@mui/material";
import { Item } from "./components/Item";

function App() {

const [postsState, setPostsState] = useState([]);
const [pagesCnt, setPagesCnt] = useState(1);
const [login, setLogin] = useState(false);
const [updateAfterDelete, setUpdateAfterDelete] = useState(false);
const [user, setUser] = useState(null);
const [favorite, setFavorite] = useState([]);

// useEffect(() => {
//   if (login){

//     api.getPosts()
//     .then((data)=>{
//       data.forEach((el)=>{
//         if (el.likes.includes(localStorage.getItem('userID'))){
//           setFavorite((prevState)=>[...prevState, el._id])
//         }
//      })
//       localStorage.setItem('beginState', JSON.stringify(data))
//       setPostsState((prevState)=>{
//         setPagesCnt(Math.ceil(data.length/POSTSONPAGE));
//         setUpdateAfterDelete(false);
//         return [...prevState, ...data]
//       })
//     })
//     .catch((err)=>{
//     alert(err)
//   })
// }else{
//   localStorage.setItem('beginState','')
//       setPostsState(()=>{
//         setPagesCnt(0);
//         return []
//       })
// }
// }, [login, updateAfterDelete]);
useEffect(() => {
  if (login){
    api.getMeInfo()
    .then((data)=>{
      setUser(data)
    })
    .catch((err)=>{
      alert(err)
    })
  }
},[login]);



  return (
    <div className='appContainer'>
    <Header>
    <Logo isLogin={login}/>
    <HeaderBtns isLogin={login} setLogin={setLogin} user={user}/>
    </Header>
    <Routes>
      <Route
      path='/'
      element={
          <div className='content__cards'>
              <Typography>Авторизируйтесь (кнопка сверху справа)
                PS: авторизация пока фейковая
              </Typography>
          </div>
      } />
      <Route path='/all_posts' element={
        <LoginContent list={postsState} setPostsState={setPostsState} pagesCnt={pagesCnt} setPagesCnt={setPagesCnt} login={login} favorite={favorite} setFavorite={setFavorite} user={user} setUpdateAfterDelete={setUpdateAfterDelete}/>
      }/>
      <Route path='/post/:itemID' element={<Item  />} />

    </Routes>
    <Footer>
      <Logo />

    </Footer>
    </div>
    )
}

export default App;
