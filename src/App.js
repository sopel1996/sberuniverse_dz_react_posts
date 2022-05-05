import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import Logo from "./components/Logo";
import HeaderBtns from "./components/HeaderBtns";
import { LoginContent } from "./components/LoginContent";

import api from "./utils/api";

import "normalize.css";
import "./App.css";
import { Item } from "./components/Item";

import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Modal as ModalMUI } from "@mui/material";
import Input from "@mui/material/Input";
import { TextField, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

function App() {
  const [postsState, setPostsState] = useState([]);
  const [pagesCnt, setPagesCnt] = useState(1);
  const [login, setLogin] = useState(
    localStorage.getItem("token") === "" || localStorage.getItem("token") === null ? false : true
  );
  const [updateAfterDelete, setUpdateAfterDelete] = useState(false);
  const [user, setUser] = useState(null);
  const [favorite, setFavorite] = useState([]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (login) {
      api
        .getMeInfo()
        .then((data) => {
          setUser(data);
        })
        .catch((err) => {
          alert(err);
        });
    }
  }, [login]);

  const handleEmailChange = ({ target }) => {
    setEmail(target.value);
  };

  const handlePasswordChange = ({ target }) => {
    setPassword(target.value);
  };

  const signUp = () => {
    console.log('signUp');

    api
      .signUp({ email, password })
      .then((createdUser) => {
        console.log({ createdUser });
        return api.signIn({ email, password });
      })
      .then((data) => console.log(data))
      .catch((err) => {
        alert(err);
      });
  };

  const signIn = () => {
    console.log('signIn');
    api
      .signIn({ email, password })
      .then((data) => {
        localStorage.setItem("userID", data.data._id);
        localStorage.setItem("token", data.token);
        setLogin(true);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="appContainer">
      <Header>
        <Logo isLogin={login} />
        <HeaderBtns isLogin={login} setLogin={setLogin} user={user} />
      </Header>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {localStorage.getItem("token") === "" ||
              localStorage.getItem("token") === null ? (
                <div className="content__cards">
                  <Grid container flexDirection="column" spacing="10">
                    <Grid item>
                      <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        required
                        value={email}
                        onChange={handleEmailChange}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        variant="outlined"
                        required
                        value={password}
                        onChange={handlePasswordChange}
                      />
                    </Grid>
                    <Grid item>
                      <Button
                        type="submit"
                        variant="contained"
                        size="small"
                        onClick={signIn}
                      >
                        Войти
                      </Button>
                      <Button
                        type="submit"
                        variant="contained"
                        size="small"
                        onClick={signUp}
                      >
                        Регистрация
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              ) : (
                <Navigate to="/all_posts" />
              )}
            </>
          }
        />
        <Route
          path="/all_posts"
          element={
            <LoginContent
              list={postsState}
              setPostsState={setPostsState}
              pagesCnt={pagesCnt}
              setPagesCnt={setPagesCnt}
              login={login}
              favorite={favorite}
              setFavorite={setFavorite}
              user={user}
              setUpdateAfterDelete={setUpdateAfterDelete}
            />
          }
        />
        <Route path="/post/:itemID" element={<Item />} />
      </Routes>
      <Footer>
        <Logo />
      </Footer>
    </div>
  );
}

export default App;
