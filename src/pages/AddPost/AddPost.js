import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AddPost.css";

const AddPost = ({ createPost }) => {
  const [values, setValues] = useState({
    text: "",
  });
  function handleChange({ target: { name, value } }) {
    setValues({ ...values, [name]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    createPost(values);
  }
  return (
    <div className="add-post">
      <Link className="link" to="/post">
        Вернуться на главную
      </Link>
      <h1 className="title-form">Добавить пост</h1>
      <form className="add-post__form" onSubmit={handleSubmit}>
        <textarea
          className="add-post__text"
          name="text"
          type="text"
          value={values.text || ""}
          onChange={handleChange}
        ></textarea>
        <button className="form__button" type="submit">
          Отправить
        </button>
      </form>
    </div>
  );
};
export default AddPost;
