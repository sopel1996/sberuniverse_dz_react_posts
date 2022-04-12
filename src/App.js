import { useEffect, useState } from "react";
import 'normalize.css';
import "./App.css";
import { Footer } from "./components/Footer";
import { CardList } from "./components/CardList";
import { Header } from "./components/Header";
import Logo  from "./components/Logo";
import api from "./utils/api";
import { POSTSONPAGE } from "./utils/config";
import { Breadcrumbs } from "./components/Breadcrumbs";
import { HeaderLine } from "./components/HeaderLine";
import { HeaderBtns } from "./components/HeaderBtns";

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
    <HeaderBtns />
    </Header>
    <Breadcrumbs />
    <HeaderLine />
    <CardList list={postsState} setPostsState={setPostsState} pagesCnt={pagesCnt} setPagesCnt={setPagesCnt}/>
    <Footer>
      <Logo />

    </Footer>
    </div>
    )
}

export default App;
