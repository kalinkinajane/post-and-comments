import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = ({ onLogin }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  function handleChange({ target: { name, value } }) {
    setValues({ ...values, [name]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    let { email, password } = values;
    onLogin(email, password);
  }
  return (
    <div className="login">
      <Link className="link" to="/post">
        Вернуться на главную
      </Link>
      <h1 className="title-form">Вход</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label className="input__title">Email</label>
          <input
            className="form__input"
            type="email"
            name="email"
            value={values.email || ""}
            onChange={handleChange}
            id="user-email"
            required
            placeholder="Введите почту"
          ></input>
        </div>
        <div className="input-container">
          <label className="input__title">Пароль</label>
          <input
            className="form__input"
            type="password"
            name="password"
            value={values.password || ""}
            onChange={handleChange}
            id="user-password-login"
            required
            minLength="8"
            placeholder="Введите пароль"
          ></input>
        </div>
        <button className="form__button" type="submit">
          Войти
        </button>
      </form>
      <p className="form__link">
        или{" "}
        <Link className="link" to="/register">
          {" "}
          Зарегистрироваться
        </Link>
      </p>
    </div>
  );
};
export default Login;
