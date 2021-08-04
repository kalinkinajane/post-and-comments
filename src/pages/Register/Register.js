import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
const Register = ({ onRegister, userData }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  function handleChange({ target: { name, value } }) {
    setValues({ ...values, [name]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    let { name, email, password, password_confirmation } = values;
    if (password === password_confirmation) {
      onRegister(name, email, password, password_confirmation);
    }
  }
  return (
    <div className="register">
      <Link className="link" to="/post">
        Вернуться на главную
      </Link>
      <h1 className="title-form">Регистрация</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-container">
          <label className="input__title">Имя</label>
          <input
            className="form__input"
            type="text"
            name="name"
            value={values.name || ""}
            onChange={handleChange}
            id="user-name"
            required
            placeholder="Введите имя"
          ></input>
        </div>
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
          {" "}
          <label className="input__title">Пароль</label>
          <input
            className="form__input"
            type="password"
            name="password"
            value={values.password || ""}
            onChange={handleChange}
            id="password-register"
            required
            minLength="8"
            placeholder="Введите пароль"
          ></input>
        </div>
        <div className="input-container">
          <label className="input__title">Введите пароль еще раз</label>
          <input
            className="form__input"
            type="password"
            name="password_confirmation"
            value={values.password_confirmation || ""}
            onChange={handleChange}
            id="password-retype-register"
            required
            minLength="8"
            placeholder="Введите пароль"
          ></input>
        </div>
        <button className="form__button" type="submit">
          Зарегистрироваться
        </button>
      </form>
      <p className="form__link">
        или{" "}
        <Link className="link" to="/login">
          Войти
        </Link>
      </p>
    </div>
  );
};
export default Register;
