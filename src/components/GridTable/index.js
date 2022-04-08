import { useEffect, useState } from "react";
import api from "../../utils/api";
import { ImgList } from "../ImgList";
import styles from "./style.module.css";

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const GridTable = () => {
  const [postsState, setPostsState] = useState([]);
  const [postsCnt, setPostsCnt] = useState(0);
  var postsOnPage = 10;
  useEffect(() => {
    api.getPosts()
    .then((response)=>{
      if (response.ok){
        return response.json();
      } else {
        throw response.status
      }
    })
    .then((data)=>{
      setPostsState((prevState)=>{
      localStorage.setItem('beginState', JSON.stringify(data))
        return [...prevState, ...data]
      })
    })
    .catch((err)=>{
      alert(err)
    })
      // .then((response) => response.json())
      // .then((result) => {
      //   setpostsState((prevState) => {
      //     return [...prevState, ...result];
      //   });
      // });
  }, []);

  useEffect(()=>{
    setPostsCnt(postsState.length)

  },[postsState])


  const sliceList = ()=>{
    // console.log(postsState);
    // console.log(JSON.parse(localStorage.getItem('beginState')));
    const slicedList = JSON.parse(localStorage.getItem('beginState')).slice(1,10);
    setPostsState(slicedList);
  }

  return (
    <div className={styles.gridTable}>
      <button onClick={()=>{console.log(postsCnt)}}>количество постов</button>
      <ImgList list={postsState} />
      <Pagination count={10} variant="outlined" 
      onChange={sliceList}/>
    </div>)
};
