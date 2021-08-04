import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Switch, useHistory, Redirect } from "react-router-dom";
import * as api from "../api/api";
import Main from "../pages/Main/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddPost from "../pages/AddPost/AddPost";
import EditPost from "../pages/EditPost/Editpost";
import Post from "../pages/Post/Post";

function App() {
  const [dataPost, setDataPost] = useState([]);
  const [userData, setUserData] = React.useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [inLogged, setinLogged] = React.useState(false);
  const history = useHistory();
  const userId = 1;
  React.useEffect(() => {
    tokenCheck();
  }, []);
  useEffect(() => {
    api
      .getPost()
      .then((data) => setDataPost(data))
      .catch((err) => {
        console.error(err);
      });
  }, []);
  // Регистрация пользователя
  const onRegister = (name, email, password, password_confirmation) => {
    api
      .register(name, email, password, password_confirmation)
      .then((data) => {
        console.log(data);
        setUserData({
          name: data.name,
          email: data.email,
          password: data.password,
          password_confirmation: data.password_confirmation,
        });
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(history.push("/login"));
  };
  // Авторизация пользователя
  const onLogin = (email, password) => {
    api
      .login(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          setUserData({
            email: data.email,
            password: data.password,
          });
          setinLogged(true);
        }
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(history.push("/post"));
  };
  // Добавление поста
  const createPost = (text) => {
    api
      .createPost(text)
      .then((newPost) => {
        setDataPost([newPost, ...dataPost]);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(history.push("/post"));
  };
  // Удаление поста
  const handleClickPostDelete = (id) => {
    api
      .removePost(id)
      .then(() => {
        const newPosts = dataPost.filter((p) => p.id !== id);
        setDataPost(newPosts);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const handleEditePost = (text, id) => {
    api
      .editePost(text, id)
      .then((data) => {
        const newsPost = dataPost.map((item) => {
          if (id === item.id) {
            item = { ...data };
          }
          return item;
        });
        setDataPost(newsPost);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(history.push("/post"));
  };

  const onSignOut = () => {
    localStorage.removeItem("jwt");
    setinLogged(false);
  };

  // проверка токена
  const tokenCheck = () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      setinLogged(true);
    }
  };

  return (
    <div className="App">
      <Switch>
        <Route path="/post" exact>
          <Main
            dataPost={dataPost}
            userId={userId}
            onClickDelete={handleClickPostDelete}
            inLogged={inLogged}
            onSignOut={onSignOut}
          />
        </Route>
        <Route exact path="/">
          <Redirect to="/post" />
        </Route>
        <Route path="/login">
          <Login onLogin={onLogin} />
        </Route>
        <Route path="/add-post">
          <AddPost createPost={createPost} />
        </Route>
        <Route exact path="/post/:id">
          <Post
            data={dataPost}
            userId={userId}
            onClickDelete={handleClickPostDelete}
          />
        </Route>
        <Route path="/post/edit/:id">
          <EditPost data={dataPost} onUpdatePost={handleEditePost} />
        </Route>
        <Route path="/register">
          <Register onRegister={onRegister} userData={userData} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
