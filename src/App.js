import { useEffect, useState } from "react";
import 'normalize.css';
import "./App.css";
import { Footer } from "./components/Footer";
import { GridTable } from "./components/GridTable";
import { Header } from "./components/Header";
import { Logo } from "./components/Logo";
import api from "./utils/api";
import { POSTSONPAGE } from "./utils/config";

function App() {

const [postsState, setPostsState] = useState([]);
const [pagesCnt, setPagesCnt] = useState(1);

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
    localStorage.setItem('beginState', JSON.stringify(data))
    setPostsState((prevState)=>{
    setPagesCnt(Math.ceil(data.length/POSTSONPAGE));
      return [...prevState, ...data]
    })
  })
  .catch((err)=>{
    alert(err)
  })
}, []);

  return (
    <div className='appContainer'>
    <Header>
    <Logo />
    </Header>
    <GridTable list={postsState} setPostsState={setPostsState} pagesCnt={pagesCnt} setPagesCnt={setPagesCnt}/>
    <Footer />
    </div>
    )
}

export default App;
